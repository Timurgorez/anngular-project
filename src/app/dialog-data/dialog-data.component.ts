import {Component, Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

export interface DialogData {
  animal: string;
  name: string;
}


@Component({
  selector: 'app-dialog-data',
  templateUrl: './dialog-data.component.html',
  styleUrls: ['./dialog-data.component.scss'],
})
export class DialogDataComponent {

  animal: string;
  name: string;

  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogDataDialogComponent,
    {
      panelClass: 'myapp-no-padding-dialog',
      width: '80wh',
      data: {
        name: this.name,
        animal: this.animal
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }

}

@Component({
  selector: 'app-dialog-data-dialog',
  templateUrl: './dialog-data-dialog.component.html',
  styleUrls: ['./dialog-data-dialog.component.scss'],
})
export class DialogDataDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<DialogDataDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}

