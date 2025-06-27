import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { CopyPlus } from 'lucide-react';
import Link from 'next/link';

export default function CoursesPage() {
  return (
    <div className="space-y-6 p-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">
            Your Courses
          </h1>
          <p className="text-muted-foreground text-sm">
            Manage and create courses for your platform.
          </p>
        </div>
        <Link
          href="/admin/courses/create"
          className={cn(
            buttonVariants({
              variant: 'default',
              className:
                'rounded-3xl font-bold flex items-center gap-2',
            })
          )}
        >
          <CopyPlus className="size-4" />
          Create Course
        </Link>
      </div>

      <div className="rounded-lg border border-dashed p-6 text-center text-muted-foreground">
        <h2 className="text-lg font-medium">No Courses Available</h2>
        <p className="text-sm">
          You haven't created any courses yet.
        </p>
      </div>
    </div>
  );
}
