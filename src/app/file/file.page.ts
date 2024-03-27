import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-file',
  templateUrl: 'file.page.html',
  styleUrls: ['file.page.scss'],
})
export class FilePage implements OnInit {
  jsonData: { [key: string]: any } | null = null;
  maxStudents: number = 0;

  constructor() { }

  ngOnInit(): void { }

  getGroupValues() {
    if (this.jsonData !== null) {
      return Object.values(this.jsonData);
    }
    return [];
  }

  toggleExpanded(group: any) {
    group.expanded = !group.expanded;
  }

  async readJson(event: any) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = async (e) => {
        if (e.target) {
          const contents = e.target.result;
          this.jsonData = JSON.parse(contents as string);
          await this.highlightGroups();
        }
      };
      reader.readAsText(file);
    }
  }

  async highlightGroups() {
    if (!this.jsonData) {
      return;
    }

    for (const group of Object.values(this.jsonData) as any[]) {
      group.expanded = false; // поле expanded для кожної групи
      const amount = group[0].amount;
      group.highlighted = amount < this.maxStudents;
    }
  }

  highlightGroupsByMaxStudents(maxStudentsValue: any) {
    const maxStudents = parseInt(maxStudentsValue, 10);

    if (!this.jsonData || isNaN(maxStudents)) {
      return;
    }

    for (const group of Object.values(this.jsonData) as any[]) {
      const amount = group[0].amount;
      const groupName = group[0].name;
      const groupElement = document.getElementById(groupName);
      if (groupElement) {
        if (amount < maxStudents) {
          groupElement.classList.add('highlighted'); // Додамо клас 'highlighted'
        } else {
          groupElement.classList.remove('highlighted'); // Видалимо клас 'highlighted'
        }
      }
    }
  }



}
