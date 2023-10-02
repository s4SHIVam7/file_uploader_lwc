
import { LightningElement, api } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class FileUploaderLWC extends LightningElement {
    @api recordId;

    handleUploadFinished(event) {
        const uploadFiles = event.detail.files;

        let toastMessage = `${uploadFiles.length} Files uploaded Successfully:\n`;
        for (let i = 0; i < uploadFiles.length; i++) {
            const file = uploadFiles[i];
            const docId = file.documentId;
            const docUrl = `/lightning/r/ContentDocument/${docId}/view`;;
             toastMessage += `${file.name} -> ${docId} : (${docUrl})\n`;
        }
      

        this.dispatchEvent(
            new ShowToastEvent({
                title: 'Success',
                message: toastMessage,
                variant: 'success',
            })
        );
    }

