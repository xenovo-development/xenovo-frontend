class Model {
    RequestGetInvDiffReport() {
        return {
            "regionCode": Array,
            "storeCodes": Array,
            "sDate": String,
            "eDate": String
        }
    }
    

}
const model = new Model();
export const RequestGetInvDiffReport = model.RequestGetInvDiffReport();
