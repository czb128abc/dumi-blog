/*
 * @Author: hongbin
 * @Date: 2023-04-14 13:55:14
 * @LastEditors: hongbin
 * @LastEditTime: 2023-04-14 17:55:47
 * @Description:
 */
import * as THREE from 'three';
import vertexShader from './vt.glsl';
import fragmentShader from './gm.glsl';

export class GradualBoxes {
  group: THREE.Group;
  update: (
    call: (mesh: THREE.Mesh<THREE.BoxGeometry, THREE.ShaderMaterial>) => void,
  ) => void;

  constructor(count = 100, range = 30) {
    const group = new THREE.Group();
    const shader = new THREE.ShaderMaterial({
      vertexShader,
      fragmentShader,
      uniforms: {
        upColor: { value: new THREE.Color('#f00') },
        upColor2: { value: new THREE.Color('#00ff1a') },
        downColor: { value: new THREE.Color('#030303') },
        time: { value: 0 },
        speed: { value: 1 },
      },
    });

    const boxes = [] as THREE.Mesh<THREE.BoxGeometry, THREE.ShaderMaterial>[];

    const { random } = Math;

    const standardGeo = new THREE.BoxGeometry(1, 1, 1, 1, 1, 1);

    for (let i = 0; i < count; i++) {
      const height = 1;
      const itemShader = shader.clone();
      const box = new THREE.Mesh(standardGeo, itemShader);
      boxes.push(box);

      itemShader.uniforms.height = { value: height };
      itemShader.uniforms.upColor.value.g = random();
      itemShader.uniforms.upColor2.value.g = random();
      itemShader.uniforms.speed.value = (0.5 - random()) * 5;

      box.scale.set(random() * 2, 2 + random() * 5, random() * 2);

      box.position.x = (0.5 - random()) * range;
      box.position.y = box.scale.y / 2;
      box.position.z = (0.5 - random()) * range;

      group.add(box);
    }
    this.group = group;

    this.update = (
      call: (mesh: THREE.Mesh<THREE.BoxGeometry, THREE.ShaderMaterial>) => void,
    ) => {
      boxes.forEach((box) => {
        box.material.uniforms.time.value += 0.01;
        call(box);
      });
    };
  }
}
