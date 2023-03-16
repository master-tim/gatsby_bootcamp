import { noise } from "./helpers/noise";
import { circle } from "./helpers/circle";
import { map } from "./helpers/map";
import { cover } from "./helpers/cover";

export const fragmentShader = `
  uniform vec3 uColor;
  uniform vec2 uPlaneSize;
  uniform vec2 uImageSize;
  uniform vec2 uMousePos;
  uniform float uMouseRadius;
  uniform float uTime;
  uniform sampler2D uTexture;
  uniform float uSpikes;
  uniform float uRadius;
  
  varying vec2 vUv;

  ${noise}
  ${circle}
  ${map}
  ${cover}

  void main() {
    float mouseRadius = uMouseRadius;
    vec2 uv = vUv;
    vec2 coverUv = getCoverUv(uv, uPlaneSize, uImageSize);

    // apply image texture
    vec4 texture = texture2D(uTexture, coverUv);
    vec4 color = texture;

    // generate cursor blob noise (slow down uTime)
    float mouseBlobNoise = snoise(vec3(uv.x * uSpikes, uv.y * uSpikes, uTime * 0.3));

    // increase mouse radius based on distance from center vec2(0.5)
    mouseRadius = mouseRadius * (1.0 + smoothstep(0.15, 0.45, distance(uMousePos, vec2(0.5))));
    
    // apply noise to mouseRadius
    float cursorRadius = map(mouseBlobNoise,
                              0.0,
                              1.0,
                              mouseRadius-(mouseRadius * 0.2),
                              mouseRadius);
    
    // draw cursor circle blob at mouse pos
    vec3 cursorColor = mix(color.rgb, uColor, circle(uv, cursorRadius, uMousePos));
    color = vec4(cursorColor, 1.0);

    // use another circle blob as mask on the color's alpha channel (black === alpha of 0)
    float imageBlobNoise = snoise(vec3(uv.x * uSpikes, uv.y * uSpikes, uTime * 1.0));
    float radius = map(imageBlobNoise, 0.0, 1.0, uRadius*0.9, uRadius);
    float mask = circle(uv, radius);
    color.a = mask;

    gl_FragColor = color;
  }
`;
