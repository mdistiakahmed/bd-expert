import { Component } from '@angular/core';
import { MenuItem, MessageService, TreeNode } from 'primeng/api';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  posts = [
    {
      title: 'Make your own website',
      author: 'Charles Dowson',
    },
    {
      title: 'Advanced logo builder',
      author: 'Devid Bekham',
    },
    {
      title: 'Advanced logo builder',
      author: 'Kapil Kumar',
    },
    {
      title: 'Make your own website',
      author: 'Charles Dowson',
    },
    {
      title: 'Advanced logo builder',
      author: 'Devid Bekham',
    },
    {
      title: 'Advanced logo builder',
      author: 'Kapil Kumar',
    },
    {
      title: 'Make your own website',
      author: 'Charles Dowson',
    },
    {
      title: 'Advanced logo builder',
      author: 'Devid Bekham',
    },
    {
      title: 'Advanced logo builder',
      author: 'Kapil Kumar',
    },
    {
      title: 'Make your own website',
      author: 'Charles Dowson',
    },
    {
      title: 'Advanced logo builder',
      author: 'Devid Bekham',
    },
    {
      title: 'Advanced logo builder',
      author: 'Kapil Kumar',
    },
  ];
  files: TreeNode[] = [
    {
      key: '0',
      label: 'Documents',
      data: 'Documents Folder',
      icon: 'pi pi-fw pi-inbox',
      children: [
        {
          key: '0-0',
          label: 'Work',
          data: 'Work Folder',
          icon: 'pi pi-fw pi-cog',
          children: [
            {
              key: '0-0-0',
              label: 'Expenses.doc',
              icon: 'pi pi-fw pi-file',
              data: 'Expenses Document',
            },
            {
              key: '0-0-1',
              label: 'Resume.doc',
              icon: 'pi pi-fw pi-file',
              data: 'Resume Document',
            },
          ],
        },
        {
          key: '0-1',
          label: 'Home',
          data: 'Home Folder',
          icon: 'pi pi-fw pi-home',
          children: [
            {
              key: '0-1-0',
              label: 'Invoices.txt',
              icon: 'pi pi-fw pi-file',
              data: 'Invoices for this month',
            },
          ],
        },
      ],
    },
    {
      key: '1',
      label: 'Events',
      data: 'Events Folder',
      icon: 'pi pi-fw pi-calendar',
      children: [
        {
          key: '1-0',
          label: 'Meeting',
          icon: 'pi pi-fw pi-calendar-plus',
          data: 'Meeting',
        },
        {
          key: '1-1',
          label: 'Product Launch',
          icon: 'pi pi-fw pi-calendar-plus',
          data: 'Product Launch',
        },
        {
          key: '1-2',
          label: 'Report Review',
          icon: 'pi pi-fw pi-calendar-plus',
          data: 'Report Review',
        },
      ],
    },
    {
      key: '2',
      label: 'Movies',
      data: 'Movies Folder',
      icon: 'pi pi-fw pi-star-fill',
      children: [
        {
          key: '2-0',
          icon: 'pi pi-fw pi-star-fill',
          label: 'Al Pacino',
          data: 'Pacino Movies',
          children: [
            {
              key: '2-0-0',
              label: 'Scarface',
              icon: 'pi pi-fw pi-video',
              data: 'Scarface Movie',
            },
            {
              key: '2-0-1',
              label: 'Serpico',
              icon: 'pi pi-fw pi-video',
              data: 'Serpico Movie',
            },
          ],
        },
        {
          key: '2-1',
          label: 'Robert De Niro',
          icon: 'pi pi-fw pi-star-fill',
          data: 'De Niro Movies',
          children: [
            {
              key: '2-1-0',
              label: 'Goodfellas',
              icon: 'pi pi-fw pi-video',
              data: 'Goodfellas Movie',
            },
            {
              key: '2-1-1',
              label: 'Untouchables',
              icon: 'pi pi-fw pi-video',
              data: 'Untouchables Movie',
            },
          ],
        },
      ],
    },
  ];

  items!: MenuItem[] | null;

  constructor(private messageService: MessageService) {}

  ngOnInit() {
    this.items = [
      {
        icon: 'pi pi-pencil',
        command: () => {
          this.messageService.add({
            severity: 'info',
            summary: 'Add',
            detail: 'Data Added',
          });
        },
      },
      {
        icon: 'pi pi-refresh',
        command: () => {
          this.messageService.add({
            severity: 'success',
            summary: 'Update',
            detail: 'Data Updated',
          });
        },
      },
      {
        icon: 'pi pi-trash',
        command: () => {
          this.messageService.add({
            severity: 'error',
            summary: 'Delete',
            detail: 'Data Deleted',
          });
        },
      },
      {
        icon: 'pi pi-upload',
        routerLink: ['/fileupload'],
      },
      {
        icon: 'pi pi-external-link',
        target: '_blank',
        url: 'http://angular.io',
      },
    ];
  }
}
