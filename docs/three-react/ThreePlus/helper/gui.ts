/*
 * @Author: hongbin(参考)
 */
import { GUI } from 'dat.gui';
import type { Object3D } from 'three';

/**
 * 初始化GUI调试工具
 */
export const initGUI = (name = 'GUI console') => {
  if (process.env.NODE_ENV === 'development') {
    // 热更新会创建多个实例 删除之前的实例
    const oldInst = document.querySelector('.dg.main');
    oldInst?.parentElement?.removeChild(oldInst);
    // console.log("del", );
  }
  const gui = new GUI({ name }) as GUI;
  window.gui = gui;
  // window.gui.hide();
  return gui;
};

const vectorKeys: ['x', 'y', 'z'] = ['x', 'y', 'z'];

export const guiTestPosition = (
  mesh: Object3D,
  range: number = 20,
  name?: string,
  other?: (folder: GUI) => void,
) => {
  const { name: meshName, type, uuid, position } = mesh;
  // 新建一个文件夹
  const folder = window.gui.addFolder(
    name || meshName || type + uuid.substring(0, 5),
  );
  setTimeout(() => {
    for (const key of vectorKeys) {
      folder
        .add(position, key, position[key] - range, position[key] + range)
        .onChange(window.render);
    }
    if (other) {
      other(folder);
    }
  });
  return folder;
};

export const guiTestScale = (
  mesh: Object3D,
  range: number = 20,
  name?: string,
) => {
  const { name: meshName, type, uuid, scale } = mesh;
  // 新建一个文件夹
  const folder = window.gui.addFolder(
    (name || meshName || type + uuid.substring(0, 5)) + 'scale',
  );
  setTimeout(() => {
    for (const key of vectorKeys) {
      folder
        .add(scale, key, scale[key] - range, scale[key] + range)
        .onChange(window.render);
    }
  });
  return folder;
};

export const guiTestRotate = (
  mesh: Object3D,
  range: number = 3.14,
  name?: string,
) => {
  const { name: meshName, type, uuid, rotation } = mesh;
  // 新建一个文件夹
  const folder = window.gui.addFolder(
    (name || meshName + uuid.substring(0, 3) || type + uuid.substring(0, 3)) +
      'rotate',
  );
  setTimeout(() => {
    for (const key of vectorKeys) {
      folder
        .add(rotation, key, rotation[key] - range, rotation[key] + range)
        .onChange(window.render);
    }
  });
  return folder;
};

export const guiTestColor = (color: string) => {
  const params = { color };
  return window.gui.addColor(params, 'color');
};

export const guiOptions = (options: any[], defaultValue: any, name: string) => {
  return window.gui.add({ [name]: defaultValue }, name).options(options);
};
