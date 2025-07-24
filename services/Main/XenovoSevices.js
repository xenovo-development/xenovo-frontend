// services/main/RegionReport.js
import axios from '@/services/extension/axios';

class RegionService {
  post(endpoint, data) {
    return axios.post(endpoint, data);
  }

  get(endpoint) {
    return axios.get(endpoint);
  }

  GetInvDiffReport(model) {
    return this.post('/api/RegionReport/GetInvDiffReport', model);
  }
  GetProductInfo(productCode, storeCode, inventoryDate) {
    return this.get(`/api/RegionReport/GetProductInfo/${productCode}/${storeCode}/${inventoryDate}`);
  }

  // Diğer servisler burada aynı mantıkla devam edebilir
}

const service = new RegionService();

export const GetInvDiffReport = service.GetInvDiffReport.bind(service);

// diğerlerini eklemeyi unutma
