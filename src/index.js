import ZkTable from './Table/Table';

const install = (Vue,opts = {}) => {
   Vue.component(ZkTable.name, ZkTable);
};
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue, {})
}
ZkTable.install = install;
export default ZkTable;
