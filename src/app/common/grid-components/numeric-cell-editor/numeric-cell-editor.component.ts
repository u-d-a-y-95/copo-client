import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { AgEditorComponent } from 'ag-grid-angular';

@Component({
    templateUrl: './numeric-cell-editor.component.html',
    styleUrls: [ './numeric-cell-editor.component.css' ]
})

export class NumericCellEditor implements AgEditorComponent, AfterViewInit {
    public params;
    public cellValue;
    private isRowPinned;
    private cancelBeforeStart;
    private target;
    private maxValue;

    @ViewChild('inputField') inputField;

    agInit(params) {
        console.log("Num-Params", params);
        this.params = params;
        this.target = params.target;

        this.isRowPinned = params.node.rowPinned;
        // console.log(this.isRowPinned);

        if (this.isCharNumeric(params.charPress)) {
            // this.eInput.value = params.charPress;
            console.log("cell value set");
            this.cellValue = params.charPress;
        } else {
            if (params.value !== undefined && params.value !== null) {
                // this.eInput.value = params.value;
                this.cellValue = params.value;
            }
        }

        // only start edit if key pressed is a number or [.] , not a letter
        var charPressIsNotANumber = params.charPress && ('1234567890'.indexOf(params.charPress) < 0);
        this.cancelBeforeStart = charPressIsNotANumber;

        // console.log('edit-stop', params);
        if (this.target === 'mark') {
            // This editor will be used for mark input. So, context will get passed 
            // and can be accessed here
            // let selectedAssessmentData = params.context.selectedAssessment;
            // if (selectedAssessmentData.is_dna === 'T') {
            //     this.maxValue = selectedAssessmentData['exam_taken_in'];
            // } else {
            //     let editedCoTitle = params.colDef.headerName;
            //     let ratio = selectedAssessmentData['exam_taken_in'] / selectedAssessmentData['total'];
            //     let maxValue = selectedAssessmentData['mapping'][editedCoTitle] * ratio;
            //     this.maxValue = maxValue;
            // }
        }
    }

    ngAfterViewInit() {
        // this.params.eGridCell.focus();
        // console.log("input", this.inputField);
        console.log("view init");
        window.setTimeout(() => {
            this.inputField.nativeElement.focus();
        })
    }

    keyPressed(event) {
        // console.log(event);
        if (! this.isKeyPressedNumeric(event) &&
                (! this.isKeyPressedDecimal(event) || this.isSecondDecimal(event, this.cellValue))) {
            console.log("keypressed");
            this.inputField.nativeElement.focus();
            if (event.preventDefault) event.preventDefault();
        } else if (this.isKeyPressedNavigation(event)) {
            event.stopPropagation();
        }
    }

    getValue() {
        return this.cellValue;
    }

    // returns the new value after editing
    isCancelBeforeStart = function () {
        if (this.isRowPinned) {
            // Row is pinned. Don't let edit;
            // console.log('Pinned row');
            return true;
        }
        return this.cancelBeforeStart;
    };

    // example - will reject the number if it contains the value 007
    // - not very practical, but demonstrates the method.
    isCancelAfterEnd = function () {
        if (this.target === 'mark') {
            // var value = this.getValue();
            // console.log(value, this.maxValue)
            // // console.log(value);
            // if (value > this.maxValue) {
            //     // attach invalid class to element;
            //     // console.log(this.eGridCell);
            //     this.params.eGridCell.classList.add('mark-invalid');
            // } else {
            //     this.params.eGridCell.classList.remove('mark-invalid');
            // }
        }
        return false;   // don't cancel;
    };


    /* -----------   Util Funcs ----------- */
    getCharCodeFromEvent(event) {
        event = event || window.event;
        return (typeof event.which == "undefined") ? event.keyCode : event.which;
    }
    
    isCharNumeric(charStr) {
        return !!/\d/.test(charStr);
    }
    
    isKeyPressedNumeric(event) {
        let charCode = this.getCharCodeFromEvent(event);
        let charStr = String.fromCharCode(charCode);
        return this.isCharNumeric(charStr);
    }
    
    isKeyPressedDecimal(event) {
        let charCode = this.getCharCodeFromEvent(event);
        return charCode === 46;
    }
    
    isSecondDecimal(event, inputVal) {
        let isCharDecimal = this.isKeyPressedDecimal(event);
        if (!isCharDecimal) return false;
    
        let secondDecimal = inputVal.indexOf('.') >= 0;
        return secondDecimal;
    }

    isKeyPressedNavigation = function (event) {
        return event.keyCode === 39
            || event.keyCode === 37;
    };

    // // if true, then this editor will appear in a popup 
    // isPopup = function () {
    //     // and we could leave this method out also, false is the default
    //     return false;
    // };
}