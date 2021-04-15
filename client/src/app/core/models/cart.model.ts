import { Injectable } from '@angular/core';
import { Adapter } from '../adapter';

export interface Cart {
    id:string,
    owner:string,
    totalQty:number,
    totalPrice:number,
}