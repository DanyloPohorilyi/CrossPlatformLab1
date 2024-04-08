import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
@Component({
  selector: 'app-file',
  templateUrl: 'file.page.html',
  styleUrls: ['file.page.scss'],
})
export class FilePage implements OnInit {
  data: any = [];
  data_groups: any = [];
  showDetails: boolean[] = new Array(1000).fill(false);

  dataUrl = 'https://api.jsonbin.io/v3/b/6613d79ae41b4d34e4e1195a';
  loading: any;

  maxStudents: number = 0;

  constructor(public loadingController: LoadingController) { }

  async load() {
    this.loading = await this.loadingController.create({
      spinner: 'bubbles',
      message: 'Завантаження...'
    });
    await this.loading.present();
    fetch(this.dataUrl).then(res => res.json())
      .then(json => {
        this.data = json;
        this.data = this.data.record;
        let i = 0;
        console.log(this.data[1]);
        while (this.data[i] != undefined) {
          this.data_groups.push(this.data[i][0]);
          i++;
        }
        this.getMaxStudent();
        this.loading.dismiss();
      });
  }

  toggleDetails(i: number) {
    if (this.showDetails[i]) {
      this.showDetails[i] = false;
    }
    else {
      this.showDetails[i] = true;
    }
  }

  getMaxStudent() {
    const groupsWithLessStudents = [];
    for (let i = 0; i < this.data.length; i++) {
      const group = this.data[i];
      const groupDetails = group[0];
      if (groupDetails.amount < this.maxStudents) {
        groupsWithLessStudents.push(groupDetails);
      }
    }
    console.log('Група де кількість студентів меншеза число:', groupsWithLessStudents);
    return groupsWithLessStudents;
  }

  getColor(a: number, b: any) {
    b = parseInt(b);
    return a < b ? 'yellow' : '';
  }

  ngOnInit(): void { }
}
