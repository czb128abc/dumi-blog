varying vec3 vColor;
uniform vec3 upColor;
uniform vec3 upColor2;
uniform vec3 downColor;
uniform float time;
uniform float speed;
uniform float height;
uniform vec3 forceColor;
uniform float isForceColor;
uniform float decay;

void main() {

    vec3 transformed = position;

    vec3 disUpColor = upColor2 - upColor;
    vec3 realUpColor = upColor + disUpColor * abs(cos(time));

    vec3 disColor = realUpColor - downColor;

    float percent = (position.y - height / -2.) / height;

    vColor = percent * disColor + downColor;
    if(isForceColor != -1.) {
        vec3 disVColor = forceColor - vColor;
        vColor = vColor + disVColor * isForceColor * decay;
    }

    if(position.y > height / -2.) {
        // transformed.y -= cos(time) * speed;
    }
    transformed.y = max(transformed.y, height / -2.);

    vec4 viewPosition = modelViewMatrix * vec4(transformed, 1.0);
    gl_Position = projectionMatrix * viewPosition;
}