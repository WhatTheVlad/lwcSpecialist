import { LightningElement, api, track, wire } from "lwc";


export default class BoatTile extends LightningElement {
  @api boat;
  selectedBoatId;
  buttonClicked = false;
  boatId;

  connectedCallback() {
    console.log('* boatTile connectedCallback *');
    console.log('boat = ' + this.boat);
    console.log('boat stringify = ' + JSON.stringify(this.boat));
  }

  // Getter for dynamically setting the background image for the picture
  get backgroundStyle() {
    return "background-image:url(" + this.boat.Picture__c + ")";
  }

  // Getter for dynamically setting the tile class based on whether the
  // current boat is selected
  get tileClass() {
    const TILE_WRAPPER_SELECTED_CLASS = 'tile-wrapper selected';
    const TILE_WRAPPER_UNSELECTED_CLASS = 'tile-wrapper';

    return this.buttonClicked ? TILE_WRAPPER_SELECTED_CLASS : TILE_WRAPPER_UNSELECTED_CLASS;

  }

  // Fires event with the Id of the boat that has been selected.
  selectBoat() {
    this.buttonClicked = !this.buttonClicked;
    this.boatId = this.boat.Id;
    this.dispatchEvent(new CustomEvent('boatSelect',  { boatId : this.boatId }));
  }

}
