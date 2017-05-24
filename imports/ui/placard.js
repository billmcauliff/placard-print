import { Template } from 'meteor/templating';

import { Placards } from '../api/placards.js';

import './placard.html';

Template.placardCheckOff.events({
    'click .toggle-checked'(){
        Placards.update(this._id, {
            $set: { checked: ! this.checked },
        });
    },
    'click .delete'(){
        Placards.remove(this._id);
    },
});