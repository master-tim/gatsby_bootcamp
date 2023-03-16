export const circle = `
  float circle(in vec2 st, in float r, vec2 pos){
    float dist = distance(st, pos);
    return 1.0 - smoothstep(r-r*0.001, r+r*0.001, dist);
  }
  float circle(in vec2 st, in float r){
    float dist = distance(st, vec2(0.5));
    return 1.0 - smoothstep(r-r*0.001, r+r*0.001, dist);
  }
`;
