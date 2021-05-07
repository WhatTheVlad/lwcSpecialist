/**
 * Created by mocan on 07/05/2021.
 */

import { LightningElement, api, track, wire} from "lwc";
import getBoats from "@salesforce/apex/BoatDataService.getBoats";
import { getRecord } from "lightning/uiRecordApi";

export default class BoatSearchResults extends LightningElement {
  @track searchResults;
  @track boatTypeId = '';
  @track spinner;
  @track error;

  @api
  searchBoats(boatTypeId) {
    console.log('searchBoats');
    console.log('boatTypeId = ' + boatTypeId);
    this.boatTypeId = boatTypeId;
  }

  //make sure boattypes = "" gets ALL boats
 //    @wire(getRecord, { recordId: '$recordId',
  @wire(getBoats, { boatTypeId : '$boatTypeId'})
  getBoats({ error, data }) {
    console.log('getBoats');
    console.log('this.boatTypeId = ' + this.boatTypeId);
    if (data) {
      console.log('data = ' + data);
      this.dispatchEvent(new CustomEvent('doneloading'));
    } else if (error) {
      console.log('error');
      this.error = error;
    }
  }

  boatSearchResults(event) {
    console.log('boatSearchResults');
  }

}