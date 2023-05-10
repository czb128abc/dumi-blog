varying vec2 vUv;
uniform float range;
uniform vec3 color1;
uniform vec3 color2;
uniform float decay;

void main() {

    float dis = distance(vUv, vec2(0.5, 0.5));

    float opacity = smoothstep(0.1 * range, 0.5 * range, dis) * 2.;
    opacity *= step(opacity, 1.);

    // float sub = (range - 0.8) * 5. * step(0.8, range);
    opacity -= decay;

    vec3 disColor = color2 - color1;
    vec3 color = color1 + disColor * cos(range);

    gl_FragColor = vec4(color, opacity);
}
