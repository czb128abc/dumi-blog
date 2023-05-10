import * as THREE from 'three';
// 导入轨道控制器
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { RGBELoader } from 'three/examples/jsm/loaders/RGBELoader';
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader';
import type { GLTF } from 'three/examples/jsm/loaders/GLTFLoader';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader.js';
// 导入后期效果合成器
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer';
// three框架本身自带效果
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass';
import { DotScreenPass } from 'three/examples/jsm/postprocessing/DotScreenPass';
import { SMAAPass } from 'three/examples/jsm/postprocessing/SMAAPass';
import { SSAARenderPass } from 'three/examples/jsm/postprocessing/SSAARenderPass';
import { GlitchPass } from 'three/examples/jsm/postprocessing/GlitchPass';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass';
import { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass';

import { initGUI } from './helper/gui';
import { stats } from './helper/stats';

console.log('THREE', THREE);

export default class ThreePlus {
  frameHandle: number = 0;
  protected _animation: VoidFunction = () => {};
  controls!: OrbitControls;

  runAnimate = true;
  stats = stats;
  gui?: ReturnType<typeof initGUI>;
  clock = new THREE.Clock();

  domElement: HTMLElement;
  width: number;
  height: number;
  updateMeshArr: never[];
  scene!: THREE.Scene;
  camera!: THREE.PerspectiveCamera;
  renderer: any;
  control: any;
  mixers: any;
  physics: any;
  textVideoArrays: any;
  effectComposer: any;
  ambientLight: any;
  unrealBloomPass: any;

  constructor(domElement: HTMLElement) {
    // console.log("THREEPlus");
    // this.mixers = [];
    // this.actions = [];
    // this.textVideoArrays = [];
    this.clock = new THREE.Clock();
    this.domElement = domElement;
    this.width = this.domElement.clientWidth;
    this.height = this.domElement.clientHeight;
    this.updateMeshArr = [];
  }
  init() {
    // console.log("THREEPlus init");
    this.initScene();
    this.initCamera();
    this.initRenderer();
    this.initControl();
    this.initEffect();
    this.render();
    this.afterInit();
  }
  afterInit() {}
  initScene() {
    this.scene = new THREE.Scene();
  }
  initCamera() {
    this.camera = new THREE.PerspectiveCamera(
      45,
      this.width / this.height,
      0.000001,
      10000,
    );
    this.camera.position.set(0, 1, 4);

    this.camera.aspect = this.width / this.height;
    //   更新摄像机的投影矩阵
    this.camera.updateProjectionMatrix();
  }
  initRenderer() {
    this.renderer = new THREE.WebGLRenderer({
      logarithmicDepthBuffer: true,
      antialias: true,
    });
    this.renderer.setSize(this.width, this.height);
    this.renderer.shadowMap.enabled = true;
    this.renderer.outputEncoding = THREE.sRGBEncoding;
    this.renderer.physicallyCorrectLights = true;
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 1;
    this.renderer.sortObjects = true;
    this.domElement.appendChild(this.renderer.domElement);
  }
  initControl() {
    this.control = new OrbitControls(this.camera, this.renderer.domElement);
  }
  render() {
    this.renderer.render(this.scene, this.camera);
  }
  gltfLoader(url: string): Promise<GLTF> {
    const gltfLoader = new GLTFLoader();
    const dracoLoader = new DRACOLoader();
    dracoLoader.setDecoderPath('/examples/js/libs/draco/');
    dracoLoader.setDecoderConfig({ type: 'js' });
    dracoLoader.preload();
    gltfLoader.setDRACOLoader(dracoLoader);

    return new Promise((resolve, reject) => {
      gltfLoader.load(url, (gltf: GLTF) => {
        resolve(gltf);
      });
    });
  }
  fbxLoader(url: string) {
    const fbxLoader = new FBXLoader();
    return new Promise((resolve) => {
      fbxLoader.load(url, (fbx) => {
        resolve(fbx);
      });
    });
  }
  hdrLoader(url: string) {
    const hdrLoader = new RGBELoader();
    return new Promise((resolve) => {
      hdrLoader.load(url, (hdr) => {
        resolve(hdr);
      });
    });
  }

  initEffect() {}

  /**
   * 添加性能指示器
   */
  addStats() {
    this.stats.init();
  }

  /**
   * 添加gui调试工具
   */
  addGUI(guiName?: string) {
    this.gui = initGUI(guiName);
  }

  /**
   * 镜头自动旋转
   */
  autoRotate() {
    if (this.controls) {
      this.controls.autoRotate = true;
      this.controls.enableRotate = true;
    }
  }

  /**
   * 设置每帧渲染执行的操作
   */
  animation(call: VoidFunction) {
    this._animation = call;
  }

  /**
   * 逐帧渲染 frame(帧)
   */
  frameByFrame() {
    this.frameHandle = requestAnimationFrame(() => this.frameByFrame());
    this.controls?.update();
    if (this.runAnimate) {
      this._animation();
    }
    this.render();
    this.stats.update();
  }

  /**
   *  停止逐帧渲染
   */
  stopFrame() {
    cancelAnimationFrame(this.frameHandle);
    this.frameHandle = 0;
  }

  // 添加辅助坐标轴
  addAxis() {
    const axis = new THREE.AxesHelper(20);
    const { scene } = this;
    const box3 = new THREE.Box3();
    box3.setFromCenterAndSize(
      new THREE.Vector3(0, 0, 0),
      new THREE.Vector3(10, 10, 10),
    );
    const helper = new THREE.Box3Helper(box3, 0xff0000);
    // helper.position.set(-5,-5,-5)
    const grid3 = new THREE.GridHelper(30, 30, 0xf0f0f0, 0xffffff);

    scene.add(axis);
    scene.add(helper);
    scene.add(grid3);
  }
}
