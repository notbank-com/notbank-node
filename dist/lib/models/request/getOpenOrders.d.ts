/**
 * Request model para obtener las órdenes abiertas.
 * - AccountId (requerido)
 * - InstrumentId (opcional)
 */
export interface GetOpenOrdersRequest {
    AccountId: number;
    InstrumentId?: number;
}
