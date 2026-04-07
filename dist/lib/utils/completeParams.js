export function completeParams(params, omsId) {
    return Object.assign(Object.assign({}, params), { OMSId: omsId });
}
