import ThreePlus from '../../ThreePlus';
import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { GradualBoxes } from '../../ThreePlus/shaders/gradual/GradualBoxes';
import vertexShader from '../../ThreePlus/shaders/strafe/vt.glsl';
import fragmentShader from '../../ThreePlus/shaders/strafe/gm.glsl';

const Effects = () => {
  const ref = useRef<HTMLDivElement>(null);
  const init = async (dom: HTMLElement) => {
    const threePlus = new ThreePlus(dom);
    console.log('🚀 ~ file: Effects.tsx:9 ~ init ~ threePlus:', threePlus);
    threePlus.init();
    threePlus.addAxis();
    threePlus.frameByFrame();
    threePlus.addStats();
    const gltf = await threePlus.gltfLoader('/assets/screen-demo/body.glb');
    gltf.scene.scale.set(0.0364, 0.0364, 0.0364);
    gltf.scene.position.set(0, 0, 1);

    console.log('🚀 ~ file: Effects.tsx:11 ~ init ~ gltf:', gltf);
    threePlus.scene.add(gltf.scene);
    const shader = new THREE.ShaderMaterial({
      vertexShader,
      fragmentShader,
      uniforms: {
        color1: { value: new THREE.Color('#f00') },
        color2: { value: new THREE.Color('#7204f8') },
        time: { value: 0 },
        range: { value: 0 },
      },
      transparent: true,
      side: THREE.DoubleSide,
    });

    const geo = new THREE.PlaneGeometry(100, 100);
    const plane = new THREE.Mesh(
      geo,
      // new THREE.MeshStandardMaterial({ side: THREE.DoubleSide })
      shader,
    );
    plane.position.y += 0.6;
    plane.rotateX(Math.PI / -2);
    gltf.scene.add(plane);
    gltf.scene.traverse(function (child) {
      if (child.isMesh) {
        if (child.material.name == '人体') {
          console.log('🚀 ~ file: index.js:109 ~ child:', child);

          child.material = new THREE.MeshPhongMaterial({
            color: 0x000000,
            specular: 0x666666,
            emissive: 0xeee,
            shininess: 10,
            opacity: 0.9,
            transparent: true,
          });
        }
      }
    });
    // const gradualBoxes = new GradualBoxes(1000, 100);
    // gltf.scene.add(gradualBoxes.group);

    threePlus.animation(() => {
      shader.uniforms.range.value += 0.005;
      shader.uniforms.range.value %= 1;
      // shader.uniforms.time.value = (Date.now() * 0.0001) % 3600;

      const range = shader.uniforms.range.value;

      const far = range * 33;
      const near = (range - 0.2) * 33;
      const decay = range > 0.8 ? (range - 0.8) * 4.9 : 0;
      shader.uniforms.decay = { value: decay };
      const boxDecay = range > 0.8 ? 1 - (range - 0.8) * 5 : 1;

      // gradualBoxes.update((box) => {
      //     box.material.uniforms.decay = {
      //         value: boxDecay,
      //     };
      //     const distance = box.position.distanceTo(plane.position);
      //     if (distance > near && distance < far) {
      //         const p = (distance - near) / (far - near);
      //         box.material.uniforms.isForceColor = { value: p };
      //     } else {
      //         box.material.uniforms.isForceColor = { value: -1 };
      //     }
      // });
    });
  };
  useEffect(() => {
    const dom = ref.current as unknown as HTMLDivElement;
    if (dom) {
      if (dom.parentNode) {
        //@ts-ignore
        dom.parentNode.classList.add('h-full', 'w-full');
        //@ts-ignore
        dom.parentNode.parentNode.classList.add('h-full', 'w-full');
      }
      init(dom);
    }
  }, []);
  return (
    <>
      <div className="h-full w-full" ref={ref} />
    </>
  );
};

export default Effects;
