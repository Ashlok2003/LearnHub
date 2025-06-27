'use client';

import { RichTextEditor } from '@/components/rich-text-editor/editor';
import { Button, buttonVariants } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Separator } from '@/components/ui/separator';
import { Textarea } from '@/components/ui/textarea';
import {
  CourseSchemaType,
  courseSchema,
  courseStatus,
  courseCategories,
} from '@/lib/zodSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import { ArrowLeft, Loader2, SparkleIcon, X } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { useForm } from 'react-hook-form';
import slugify from 'slugify';
import { toast } from 'sonner';

export default function CourseCreationPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [thumbnailPreview, setThumbnailPreview] = useState<
    string | null
  >(null);

  const form = useForm<CourseSchemaType>({
    resolver: zodResolver(courseSchema),
    defaultValues: {
      title: '',
      description: '',
      fileKey: '',
      price: 0,
      duration: 0,
      level: 'Beginner',
      category: 'Other',
      status: 'Draft',
      slug: '',
      smallDescription: '',
    },
  });

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: { 'image/*': ['.jpeg', '.jpg', '.png', '.gif'] },
    maxFiles: 1,
    onDrop: acceptedFiles => {
      const file = acceptedFiles[0];
      if (file) {
        const previewUrl = URL.createObjectURL(file);
        setThumbnailPreview(previewUrl);
        form.setValue('fileKey', previewUrl, {
          shouldValidate: true,
        });
      } else {
        toast.error(
          'Invalid file type. Please upload a JPEG, PNG, or GIF image.'
        );
      }
    },
  });

  async function onSubmit(values: CourseSchemaType) {
    setIsSubmitting(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      console.log(values);
      toast.success('Your course has been successfully created!');
      form.reset();
      setThumbnailPreview(null);
    } catch (error) {
      toast.error('Failed to create course. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="container mx-auto p-8 space-y-8 max-w-5xl min-h-screen">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link
            href="/admin/courses"
            className={buttonVariants({
              variant: 'outline',
              size: 'icon',
              className: 'rounded-full border-2',
            })}
          >
            <ArrowLeft className="size-5" />
          </Link>
          <div>
            <h1 className="text-4xl font-extrabold tracking-tight">
              Create New Course
            </h1>
            <p className="text-muted-foreground text-base mt-2">
              Build an engaging course with comprehensive details for
              your learners.
            </p>
          </div>
        </div>
      </div>

      <Card className="shadow-xl border-0 rounded-2xl">
        <CardHeader className="pb-1">
          <CardTitle className="text-3xl font-semibold">
            Course Details
          </CardTitle>
          <CardDescription className="text-muted-foreground">
            Complete the form below to create a professional course
            listing.
          </CardDescription>
        </CardHeader>
        <Separator />
        <CardContent className="pt-2">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-6"
            >
              <FormField
                control={form.control}
                name="fileKey"
                render={() => (
                  <FormItem>
                    <FormLabel className="text-lg font-medium">
                      Course Thumbnail
                    </FormLabel>
                    <FormControl>
                      <div
                        {...getRootProps()}
                        className={`border-2 border-dashed rounded-xl p-6 text-center transition-colors ${
                          isDragActive
                            ? 'border-blue-500 bg-blue-50'
                            : 'hover:border-gray-400'
                        }`}
                      >
                        <input {...getInputProps()} />
                        {thumbnailPreview ? (
                          <div className="relative">
                            <img
                              src={thumbnailPreview}
                              alt="Thumbnail preview"
                              className="mx-auto max-h-48 rounded-lg shadow-md"
                            />
                            <Button
                              type="button"
                              variant="destructive"
                              size="icon"
                              className="absolute top-2 right-2 rounded-full"
                              onClick={() => {
                                setThumbnailPreview(null);
                                form.setValue('fileKey', '', {
                                  shouldValidate: true,
                                });
                              }}
                            >
                              <X className="size-4" />
                            </Button>
                          </div>
                        ) : (
                          <div className="space-y-2">
                            <p className="text-muted-foreground">
                              {isDragActive
                                ? 'Drop the image here'
                                : 'Drag & drop an image or click to select'}
                            </p>
                            <Button type="button" variant="outline">
                              Select Image
                            </Button>
                          </div>
                        )}
                      </div>
                    </FormControl>
                    <FormDescription className="text-sm text-muted-foreground">
                      Recommended: 1280x720px (JPEG, PNG, or GIF)
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="title"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-base font-medium">
                        Course Title
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Enter course title"
                          {...field}
                          className="focus:ring-2 rounded-lg py-2"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div className="flex items-end gap-4">
                  <FormField
                    control={form.control}
                    name="slug"
                    render={({ field }) => (
                      <FormItem className="w-full">
                        <FormLabel className="text-base font-medium">
                          Course Slug
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="course-slug"
                            {...field}
                            className="rounded-lg py-2"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button
                    type="button"
                    variant="outline"
                    className="rounded-lg"
                    onClick={() => {
                      const titleValue = form.getValues('title');
                      if (titleValue) {
                        const slug = slugify(titleValue, {
                          lower: true,
                        });
                        form.setValue('slug', slug, {
                          shouldValidate: true,
                        });
                      } else {
                        toast.info('Please enter a title first');
                      }
                    }}
                  >
                    <SparkleIcon className="size-4 mr-2" />
                    Generate
                  </Button>
                </div>
              </div>

              <FormField
                control={form.control}
                name="smallDescription"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-base font-medium">
                      Short Description
                    </FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Brief course overview (2-3 sentences)"
                        className="resize-none h-28 rounded-lg"
                        {...field}
                      />
                    </FormControl>
                    <FormDescription className="text-sm text-muted-foreground">
                      This appears in course previews and search
                      results.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-base font-medium">
                      Description
                    </FormLabel>
                    <FormControl>
                      <RichTextEditor field={field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="grid grid-cols-2 md:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="category"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-base font-medium">
                        Category
                      </FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger className="w-full rounded-lg">
                            <SelectValue placeholder="Select a category" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent className="w-full">
                          {courseCategories.map(category => (
                            <SelectItem
                              value={category}
                              key={category}
                              className="w-full"
                            >
                              {category}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="level"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-base font-medium">
                        Level
                      </FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger className="w-full rounded-lg">
                            <SelectValue placeholder="Select a level" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent className="w-full">
                          <SelectItem
                            value="Beginner"
                            className="w-full"
                          >
                            Beginner
                          </SelectItem>
                          <SelectItem
                            value="Intermediate"
                            className="w-full"
                          >
                            Intermediate
                          </SelectItem>
                          <SelectItem
                            value="Advanced"
                            className="w-full"
                          >
                            Advanced
                          </SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="price"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-base font-medium">
                        Price ($)
                      </FormLabel>
                      <FormControl>
                        <Input
                          type="number"
                          placeholder="0.00"
                          step="1"
                          className="w-full rounded-lg"
                          {...field}
                          onChange={e =>
                            field.onChange(parseFloat(e.target.value))
                          }
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="duration"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-base font-medium">
                        Duration (hours)
                      </FormLabel>
                      <FormControl>
                        <Input
                          type="number"
                          placeholder="0"
                          className="w-full rounded-lg"
                          {...field}
                          onChange={e =>
                            field.onChange(parseInt(e.target.value))
                          }
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="status"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-base font-medium">
                      Status
                    </FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger className="w-full rounded-lg">
                          <SelectValue placeholder="Select status" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {courseStatus.map(status => (
                          <SelectItem key={status} value={status}>
                            {status}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormDescription className="text-sm text-gray-500">
                      Set to 'Published' to make the course publicly
                      visible, 'Draft' to keep it hidden, or
                      'Archived' to retire it.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="flex justify-end gap-4 pt-6 border-t">
                <Button
                  type="button"
                  variant="outline"
                  className="rounded-lg"
                  onClick={() => {
                    form.reset();
                    setThumbnailPreview(null);
                  }}
                >
                  Reset Form
                </Button>
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="rounded-lg"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Creating...
                    </>
                  ) : (
                    'Create Course'
                  )}
                </Button>
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
}
