import { MaintenanceConfig, PageConfig, WorkerConfig } from './types/config'

const pageConfig: PageConfig = {
  title: "站点监测",
  logo: 'http://q.qlogo.cn/headimg_dl?dst_uin=3775526563&spec=640&img_type=jpg',
  favicon: 'http://q.qlogo.cn/headimg_dl?dst_uin=3775526563&spec=640&img_type=jpg',
  links: [
    { link: 'https://zyh111.top', label: '主页', highlight: true },
  ],
}

const workerConfig: WorkerConfig = {
  monitors: [
    {
      id: 'home',
      name: '主页',
      method: 'GET',
      target: 'https://zyh111.top/',
      statusPageLink: 'https://zyh111.top/',
      hideLatencyChart: true,
    },
    {
      id: 'waline',
      name: '留言板',
      method: 'GET',
      target: 'https://waline.zyh111.top/',
      statusPageLink: 'https://waline.zyh111.top/',
      hideLatencyChart: true,
    },
    {
      id: 'blog',
      name: '博客',
      method: 'GET',
      target: 'https://blog.zyh111.top/',
      statusPageLink: 'https://blog.zyh111.top/',
      hideLatencyChart: true,
    },
  ],
}

const maintenances: MaintenanceConfig[] = []

export { maintenances, pageConfig, workerConfig }
