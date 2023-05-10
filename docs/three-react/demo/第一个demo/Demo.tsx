import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'; //jsm/controls/OrbitControls.js';

function helper(scene) {
  const grid = new THREE.GridHelper(100, 20, 0xff0000, 0x000000);
  grid.material.opacity = 0.1;
  grid.material.transparent = true;
  scene.add(grid);

  const axesHelper = new THREE.AxesHelper(30);
  scene.add(axesHelper);
}

function init(dom: HTMLDivElement) {
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
  scene.add(mesh); //网格模型添加到场景中
  /**
   * 光源设置
   */
  //点光源
  const point = new THREE.PointLight(0xffffff);
  point.position.set(400, 200, 300); //点光源位置
  scene.add(point); //点光源添加到场景中
  //环境光
  const ambient = new THREE.AmbientLight(0x444444);
  scene.add(ambient);
  console.log(scene);
  // console.log(scene.children)
  /**
   * 相机设置
   */
  const width = window.innerWidth; //窗口宽度
  const height = window.innerHeight; //窗口高度
  const k = width / height; //窗口宽高比
  const s = 200; //三维场景显示范围控制系数，系数越大，显示的范围越大
  //创建相机对象
  const camera = new THREE.OrthographicCamera(-s * k, s * k, s, -s, 1, 1000);
  camera.position.set(200, 300, 200); //设置相机位置
  camera.lookAt(scene.position); //设置相机方向(指向的场景对象)
  /**
   * 创建渲染器对象
   */
  const renderer = new THREE.WebGLRenderer();
  renderer.setSize(width, height); //设置渲染区域尺寸
  renderer.setClearColor(0xb9d3ff, 1); //设置背景颜色
  dom.appendChild(renderer.domElement); //body元素中插入canvas对象
  //执行渲染操作   指定场景、相机作为参数
  //  renderer.render(scene, camera);
  function render() {
    renderer.render(scene, camera); //执行渲染操作
  }
  helper(scene);
  render();
  var controls = new OrbitControls(camera, renderer.domElement); //创建控件对象
  controls.addEventListener('change', render); //监听鼠标、键盘事件
}

const Demo = (props: any) => {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    init(ref.current as HTMLDivElement);
  }, []);
  return <div className="h-full" style={{ height: 600 }} ref={ref}></div>;
};

export default Demo;
