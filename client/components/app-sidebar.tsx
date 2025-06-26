'use client';

import { NavDocuments } from '@/components/nav-documents';
import { NavMain } from '@/components/nav-main';
import { NavSecondary } from '@/components/nav-secondary';
import { NavUser } from '@/components/nav-user';
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar';
import Logo from '@/public/logo.png';
import {
  IconBook,
  IconCertificate,
  IconChartBar,
  IconDashboard,
  IconFolder,
  IconFolderOpen,
  IconHelp,
  IconListDetails,
  IconReport,
  IconSearch,
  IconSettings,
  IconUsers,
  IconVideo,
} from '@tabler/icons-react';
import Image from 'next/image';
import Link from 'next/link';
import * as React from 'react';
import { Separator } from './ui/separator';

const data = {
  user: {
    name: 'Ashlok Chaudhary',
    email: 'admin@learnhub.com',
    avatar: '/avatars/admin.jpg',
  },
  navMain: [
    {
      title: 'Dashboard',
      url: '/admin',
      icon: IconDashboard,
    },
    {
      title: 'Courses',
      url: '/admin/courses',
      icon: IconListDetails,
    },
    {
      title: 'Students',
      url: '/admin/students',
      icon: IconUsers,
    },
    {
      title: 'Instructors',
      url: '/admin/instructors',
      icon: IconUsers,
    },
  ],
  navClouds: [
    {
      title: 'Content Management',
      icon: IconFolder,
      url: '#',
      items: [
        {
          title: 'Lectures',
          url: '/admin/content/lectures',
        },
        {
          title: 'Quizzes',
          url: '/admin/content/quizzes',
        },
        {
          title: 'Assignments',
          url: '/admin/content/assignments',
        },
      ],
    },
    {
      title: 'Live Sessions',
      icon: IconVideo,
      url: '#',
      items: [
        {
          title: 'Upcoming Sessions',
          url: '/admin/live/upcoming',
        },
        {
          title: 'Recordings',
          url: '/admin/live/recordings',
        },
      ],
    },
    {
      title: 'Certifications',
      icon: IconCertificate,
      url: '/admin/certifications',
      items: [
        {
          title: 'Issued',
          url: '/admin/certifications/issued',
        },
        {
          title: 'Templates',
          url: '/admin/certifications/templates',
        },
      ],
    },
  ],
  navSecondary: [
    {
      title: 'Reports & Analytics',
      url: '/admin/reports',
      icon: IconChartBar,
    },
    {
      title: 'Settings',
      url: '/admin/settings',
      icon: IconSettings,
    },
    {
      title: 'Help Center',
      url: '/admin/help',
      icon: IconHelp,
    },
    {
      title: 'Search',
      url: '/admin/search',
      icon: IconSearch,
    },
  ],
  documents: [
    {
      name: 'Course Catalog',
      url: '/admin/documents/catalog',
      icon: IconBook,
    },
    {
      name: 'Grade Reports',
      url: '/admin/documents/grades',
      icon: IconReport,
    },
    {
      name: 'Student Submissions',
      url: '/admin/documents/submissions',
      icon: IconFolderOpen,
    },
  ],
};

export function AppSidebar({
  ...props
}: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="offcanvas" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              className="data-[slot=sidebar-menu-button]:!p-1.5"
            >
              <Link href="#">
                <Image
                  src={Logo}
                  alt="LearnHub logo"
                  className="!size-5"
                />
                <span className="text-base font-semibold">
                  LearnHub
                </span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>

      <SidebarContent>
        <NavMain items={data.navMain} />
        <Separator />
        <NavDocuments items={data.documents} />
        <NavSecondary items={data.navSecondary} className="mt-auto" />
      </SidebarContent>
      <Separator />
      <SidebarFooter>
        <NavUser />
      </SidebarFooter>
    </Sidebar>
  );
}
