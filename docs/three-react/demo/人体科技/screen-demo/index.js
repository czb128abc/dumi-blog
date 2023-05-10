import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'; //jsm/controls/OrbitControls.js';
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'; //jsm/controls/OrbitControls.js';

function helper(scene) {
  const grid = new THREE.GridHelper(100, 20, 0xff0000, 0x000000);
  grid.material.opacity = 0.8;
  grid.material.transparent = true;
  scene.add(grid);

  const axesHelper = new THREE.AxesHelper(30);
  scene.add(axesHelper);
}

function gltfLoader(url, loadingCallback) {
  const loadingManager = new THREE.LoadingManager();
  // loadingManager.onStart(()=> {
  //   loadingCallback(true);
  // });
  // loadingManager.onLoad(()=> {
  //   loadingCallback(false);
  // });
  const dracoLoader = new DRACOLoader();
  dracoLoader.setDecoderPath('/examples/js/libs/draco/');
  dracoLoader.setDecoderConfig({ type: 'js' });
  dracoLoader.preload();
  const gltfLoader = new GLTFLoader(loadingManager);
  gltfLoader.setDRACOLoader(dracoLoader);
  return new Promise((resolve, reject) => {
    gltfLoader.load(url, (gltf) => {
      resolve(gltf);
    });
  });
}

function addPlane(src, num, sizea, sizeb, loopA, rota) {
  let video = document.createElement('video');
  video.src = src;
  video.loop = loopA;
  video.muted = true;
  video.play();
  // let size=50
  let videoTexture = new THREE.VideoTexture(video);
  const videoPlane = new THREE.PlaneGeometry(sizea, sizeb);
  const material = new THREE.MeshStandardMaterial({
    color: 0xffffff,
    // map:videoTexture,
    alphaMap: videoTexture,
    side: THREE.DoubleSide,
    transparent: true,
    opacity: 0.95,
    blending: THREE.AdditiveBlending,
    flatShading: true,
    depthTest: false,
  });
  const plane = new THREE.Mesh(videoPlane, material);

  function planeRotation() {
    if (plane) {
      plane.rotation.z -= num;
    }
    requestAnimationFrame(planeRotation);
  }
  if (rota) {
    planeRotation();
  }

  return plane;
}

async function init(dom) {
  /**
   * 创建场景对象Scene
   */
  const scene = new THREE.Scene();
  /**
   * 创建网格模型
   */
  const geometry = new THREE.SphereGeometry(60, 40, 40); //创建一个球体几何对象
  //  const geometry = new THREE.BoxGeometry(100, 100, 100); //创建一个立方体几何对象Geometry
  const material = new THREE.MeshLambertMaterial({
    color: '#4EC5F1',
  }); //材质对象Material
  const mesh = new THREE.Mesh(geometry, material); //网格模型对象Mesh
  // scene.add(mesh); //网格模型添加到场景中
  /**
   * 光源设置
   */
  //点光源
  const point = new THREE.PointLight(0xffffff);
  point.position.set(400, 200, 300); //点光源位置
  // scene.add(point); //点光源添加到场景中
  //环境光
  const ambient = new THREE.AmbientLight(0x444444);
  scene.add(ambient);
  helper(scene);
  const gltf = await gltfLoader('/assets/screen-demo/body.glb', (loading) =>
    console.log(loading),
  );
  console.log('🚀 ~ file: index.js:90 ~ init ~ gltf:', gltf);
  scene.add(gltf.scene);
  gltf.scene.traverse(function (child) {
    if (child.isMesh) {
      if (child.material.name == '人体') {
        console.log('🚀 ~ file: index.js:109 ~ child:', child);
        // child.material.blending = THREE.AdditiveBlending;
        // child.material.flatShading = false;
        // child.material.depthTest = false;
        // child.material.color = 0x999999;
        child.material = new THREE.MeshPhongMaterial({
          color: 0x000000,
          specular: 0x666666,
          emissive: 0xff0000,
          shininess: 10,
          opacity: 0.9,
          transparent: true,
        });
      }
    }
  });
  // console.log(scene.children)

  const pasterOne = addPlane(
    '/assets/screen-demo/paster-1.mp4',
    0,
    45,
    45,
    true,
    false,
  );
  pasterOne.position.y = -2;
  pasterOne.position.z = -1;
  console.log('🚀 ~ file: index.js:122 ~ init ~ pasterOne:', pasterOne);
  scene.add(pasterOne);
  scene.add(
    addPlane('/assets/screen-demo/paster-2.mp4', 0.002, 45, 45, true, true),
  );
  const content = addPlane(
    '/assets/screen-demo/content.mp4',
    0,
    192,
    108,
    true,
    false,
  );
  content.rotation.x = (0 / 180) * Math.PI;
  content.position.y;
  scene.add(content);
  /**
   * 相机设置
   */
  const width = dom.clientWidth; //窗口宽度
  const height = dom.clientHeight; //窗口高度
  const k = width / height; //窗口宽高比
  const s = 200; //三维场景显示范围控制系数，系数越大，显示的范围越大
  //创建相机对象
  const camera = new THREE.OrthographicCamera(-s * k, s * k, s, -s, 1, 1000);
  camera.position.set(-0.5, 29, 116); //设置相机位置
  camera.lookAt(scene.position); //设置相机方向(指向的场景对象)
  /**
   * 创建渲染器对象
   */
  const renderer = new THREE.WebGLRenderer();
  // renderer.setClearColor(0xb9d3ff, 1); //设置背景颜色
  renderer.setSize(width, height); //设置渲染区域尺寸
  renderer.outputEncoding = THREE.sRGBEncoding; //srg颜色
  renderer.sortObjects = false; //定义渲染器是否应对对象进行排序。默认是true. 不再透明度排序，从而修补透明度 显示bug
  dom.appendChild(renderer.domElement); //body元素中插入canvas对象
  //执行渲染操作   指定场景、相机作为参数
  //  renderer.render(scene, camera);
  function render() {
    requestAnimationFrame(render);
    renderer.render(scene, camera); //执行渲染操作
  }

  render();
  var controls = new OrbitControls(camera, renderer.domElement); //创建控件对象
  controls.addEventListener('change', render); //监听鼠标、键盘事件
}

const ScreenDemo = (props) => {
  const ref = useRef(null);
  useEffect(() => {
    ref.current.parentNode.parentNode.classList.add('h-full', 'w-full');
    ref.current.parentNode.classList.add('h-full', 'w-full');
    init(ref.current);
  }, []);
  return (
    <>
      <div className="h-full w-full" ref={ref} />
    </>
  );
};

export default ScreenDemo;
