export function completeParamsArray(paramsArray, omsId) {
    return paramsArray.map(params => (Object.assign(Object.assign({}, params), { OMSId: omsId })));
}
