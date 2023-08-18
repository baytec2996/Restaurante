<?php

Session::init();

?>
<?php
class Pago extends Controller {

function __construct() {
    parent::__construct();	
}

function index()
{
    $this->view->title_page = 'Pagos Pendientes';
    Session::set('notificacion', false);
    $this->view->data = $this->model->Listar();
	// $this->view->js = array('inventario/js/func_entsal.js');
	$this->view->render('pago/index', false);
}

function desac()
{
    Session::set('notificacion', false);
    $this->view->render('pago/index', false);
}

function notifi()
{
    header('Content-Type: application/json; charset=utf-8');
    if(Session::get('notificacion')){
        echo  json_encode(["mostrar_noti" => 1]);
    } else {
        echo json_encode(["mostrar_noti" => 0]);
    }
}

}