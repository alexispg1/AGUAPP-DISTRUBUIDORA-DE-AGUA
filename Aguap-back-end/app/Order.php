<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Order extends Model
{

    protected $table = 'tbl_ordenes';
    protected $primaryKey = 'idOrden';

    protected $fillable = ['idCliente','idRepartidor','idUbicacion',' fechaOrden'];

    public function getEstatusAttribute($estatus) {

        if($estatus == 1) return "creada";
        if($estatus == 2) return "enviada";
        if($estatus == 3) return "entregada";

    }

    public function scopeGetOrders($query,$request) {
        return $query->tblCustomer()
            ->tblSeller()
            ->getAttrs()
            ->getOrdersLike($request)
            ->orderBy('tbl_ordenes.idOrden','DESC');
    }

    public function scopeTblCustomer($query) {
        return $query->join('tbl_usuarios as customers','tbl_ordenes.idCliente','customers.idUsuario');
    }
    public function scopeTblSeller($query) {
        return $query->join('tbl_usuarios as sellers','tbl_ordenes.idRepartidor','sellers.idUsuario');
    }
    public function scopeActives($query) {
        return $query->where('tbl_ordenes.estatus','>',0);
    }
    public function scopeGetAttrs($query){
        return $query->select(
            'tbl_ordenes.idOrden as codigoPedido',
            'tbl_ordenes.fechaOrden as fechaEntrega',
            'tbl_ordenes.created_at as fechaCreacionOrden',
            'customers.name as nameCustomer',
            'customers.lastName as lastNameCustomer',
            'sellers.name as nameSeller',
            'sellers.lastName as lastNameSeller',
            'tbl_ordenes.estatus'
        );
    }
    public function scopeGetOrdersLike($query,$request) {
        return $query->getByCustomer($request->customer)
            ->getBySeller($request->idSeller)
            ->getBetweenDates($request->startDate,$request->endDate)
            ->getByStatus($request->status);
    }

    public function scopeGetByCustomer($query,$idCustomer) {
        return $query->when(!empty($idCustomer),function($query) use($idCustomer){
            return $query->where('customers.name',"LIKE","%{$idCustomer}%")
                ->orWhere('customers.lastName',"LIKE","%{$idCustomer}%");
        });
    }

    public function scopeGetBySeller($query,$idSeller) {
        return $query->when(!empty($idSeller), function ($query) use ($idSeller) {
            return $query->where('sellers.idUsuario',$idSeller);
        });
    }

    public function scopeGetBetweenDates($query,$startDate,$endDate) {
        return $query->when(!empty($startDate) && !empty($endDate), function ($query) use($startDate,$endDate){
            return $query->whereBetween('tbl_ordenes.fechaOrden',[$startDate,$endDate]);
        });
    }

    public function scopeGetByStatus($query,$status) {
        return $query->when(!empty($status) && $status != 0 , function($query) use($status){
             return $query->where('tbl_ordenes.estatus',$status);
        });
    }

    public function scopeGetOrderByIdClienteHitorial($query,$idUsuario) {
        return $query->where('idCliente',$idUsuario)
        ->where('estatus',1);
    }

    public function scopeGetOrderByIdCliente($query,$idUsuario) {
        return $query->where('idCliente',$idUsuario)
            ->where('estatus',0);
    }

    public function scopeGetOrderByIdClienteHowHistorial($query,$idUsuario) {
        return $query->where('idCliente',$idUsuario);
    }

    public function scopeGetOrder($query,$idOrder) {
        return $query->tblUsuariosRepartidor()
            ->tblUbicacion()
            ->where('tbl_ordenes.idOrden',$idOrder)
            ->getAttributes();
    }

    public function scopeTblUsuariosRepartidor($query) {
        return $query->join('tbl_usuarios','tbl_ordenes.idRepartidor','tbl_usuarios.idUsuario');
    }

    public function scopeTblUbicacion($query) {
        return $query->join('tbl_ubicaciones','tbl_ordenes.idUbicacion','tbl_ubicaciones.idUbicacion');
    }

    public function scopeGetAttributes($query) {
        return $query->select(
            'tbl_ordenes.idOrden',
            'tbl_ordenes.fechaOrden',
            'tbl_ubicaciones.latitude',
            'tbl_ubicaciones.longitude',
            'tbl_ubicaciones.address',
            'tbl_ordenes.idRepartidor',
            'tbl_usuarios.name as nombreRepartidor',
            'tbl_usuarios.lastName as apellidoRepartidor',
            'tbl_ordenes.idCliente',
            'tbl_ordenes.estatus'
        );
    }

    public function scopeGetOrdersByDeliver($query,$idRepartidor){
        return $query->tblUsuariosRepartidor()
        ->where('idRepartidor',$idRepartidor)
        ->where('estatus',0)
        ->getDatas();
    }

    public function scopeGetOrdersByDeliverHistorial($query,$idRepartidor){
        return $query->tblUsuariosRepartidor()
        ->where('idRepartidor',$idRepartidor)
        ->where('estatus',1)
        ->getDatas();
    }

    public function scopeGetDatas($query){
        return $query->select(
            'tbl_ordenes.idOrden',
            'tbl_ordenes.fechaOrden',
            'tbl_ordenes.idRepartidor',
            'tbl_usuarios.name as nombreRepartidor',
            'tbl_usuarios.lastName as apellidoRepartidor',
            'tbl_ordenes.idCliente',
            'tbl_ordenes.estatus'
        );
    }
}
