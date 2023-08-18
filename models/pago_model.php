<?php

class Pago_Model extends Model {

	public function __construct() {
		parent::__construct();
	}

    public function Listar()
    {
        try {
            
            return $this->db->selectAll('SELECT * FROM tm_pagos_men');
            
            }
        catch (Exception $e) {

            die($e->getMessage());
        }
    }
}