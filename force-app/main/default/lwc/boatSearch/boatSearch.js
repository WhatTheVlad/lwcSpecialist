import { LightningElement, api, track, wire } from "lwc";

export default class BoatSearch extends LightningElement {
  isLoading = false;
  @track boatTypeId = '';


  // Handles loading event
  handleLoading() {
    this.isLoading = true;
  }

  // Handles done loading event
  handleDoneLoading() {
    this.isLoading = false;
  }

  // Handles search boat event
  // This custom event comes from the form
  searchBoats(event) {
    console.log('searchBoats');
    this.handleLoading();
    console.log('1');
    console.log('event = ' + event)
    console.log('event JSON = ' + JSON.stringify(event))
    console.log('event.detail = ' + event.detail);

    this.boatTypeId = event.detail.boatTypeId;
    console.log('2');
    this.template.querySelector('c-boat-search-results').searchBoats(this.boatTypeId);
    console.log('3');
  }

  createNewBoat() {

  }
}
