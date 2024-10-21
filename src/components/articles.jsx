import { Input } from "@/components/ui/input";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Search } from "lucide-react";
import * as React from "react";
import { blogPosts } from "../data/blogPosts";
import authorImage from "../img/profilePic.jpg";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function ArticlesSection() {
  return (
    <>
      <div
        className=" flex flex-row w-full bg-[background: #EFEEEB;
] justify-center h-16 items-center "
      >
        <div className="w-11/12">
          <div className="font-semibold text-2xl">Latest articles</div>
        </div>
      </div>

      <div
        className=" flex flex-row w-full bg-[background: #EFEEEB;
] justify-center h-16 "
      >
        <div className="flex flex-row justify-between bg-[#EFEEEB] w-11/12 h-20 items-center min-sm:rounded-2xl px-4 max-sm:w-full max-sm:flex-col items-center max-sm:py-16 max-sm:justify-center max-sm:gap-2 ">
          <div id="tab" className="max-sm:hidden">
            <Tabs defaultValue="Highlight" className="w-[400px]">
              <TabsList className="grid w-full grid-cols-4  rounded-md bg-[#EFEEEB]">
                <TabsTrigger
                  value="Highlight"
                  className="rounded-sm data-[state=active]:bg-[#DAD6D1] data-[state=active]:text-[#43403B] "
                >
                  Highlight
                </TabsTrigger>
                <TabsTrigger
                  value="Cat"
                  className="rounded-sm data-[state=active]:bg-[#DAD6D1]"
                >
                  Cat
                </TabsTrigger>
                <TabsTrigger
                  value="Inspiration"
                  className="rounded-sm data-[state=active]:bg-[#DAD6D1]"
                >
                  Inspiration
                </TabsTrigger>
                <TabsTrigger
                  value="General"
                  className="rounded-sm data-[state=active]:bg-[#DAD6D1]"
                >
                  General
                </TabsTrigger>
              </TabsList>
            </Tabs>
          </div>
          <div className="relative w-80 max-sm:w-full">
            <Input
              type="text"
              placeholder="Search"
              className="pr-10 bg-white text-[#DAD6D1]"
            />
            <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
          </div>

          <div id="selectMenu" className="sm:hidden w-full text-[#75716B]">
            <div className="text-base">Category</div>
            <Select>
              <SelectTrigger className="w-full  bg-white">
                <SelectValue placeholder="Highlight" />
              </SelectTrigger>
              <SelectContent className=" bg-white">
                <SelectGroup>
                  <SelectItem value="Highlight">Highlight</SelectItem>
                  <SelectItem value="Cat">Cat</SelectItem>
                  <SelectItem value="Inspiration">Inspiration</SelectItem>
                  <SelectItem value="General">General</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>
      <div className="w-full flex flex-row justify-center sm:mt-16 max-sm:mt-20">
        <div className="w-11/12 ">
          <article className="grid grid-cols-1 md:grid-cols-2 gap-8 px-4 md:px-0">
            <BlogCard
              image={blogPosts[0].image}
              category={blogPosts[0].category}
              title={blogPosts[0].title}
              description={blogPosts[0].description}
              author={blogPosts[0].author}
              date={blogPosts[0].date}
            />
            <BlogCard
              image={blogPosts[1].image}
              category={blogPosts[1].category}
              title={blogPosts[1].title}
              description={blogPosts[1].description}
              author={blogPosts[1].author}
              date={blogPosts[1].date}
            />
            <BlogCard
              image={blogPosts[2].image}
              category={blogPosts[2].category}
              title={blogPosts[2].title}
              description={blogPosts[2].description}
              author={blogPosts[2].author}
              date={blogPosts[2].date}
            />
            <BlogCard
              image={blogPosts[3].image}
              category={blogPosts[3].category}
              title={blogPosts[3].title}
              description={blogPosts[3].description}
              author={blogPosts[3].author}
              date={blogPosts[3].date}
            />
            <BlogCard
              image={blogPosts[4].image}
              category={blogPosts[4].category}
              title={blogPosts[4].title}
              description={blogPosts[4].description}
              author={blogPosts[4].author}
              date={blogPosts[4].date}
            />
            <BlogCard
              image={blogPosts[5].image}
              category={blogPosts[5].category}
              title={blogPosts[5].title}
              description={blogPosts[5].description}
              author={blogPosts[5].author}
              date={blogPosts[5].date}
            />
          </article>
        </div>
      </div>
    </>
  );
}



function BlogCard({ image, category, title, description, author, date }) {
  return (
    <div className="flex flex-col gap-4">
      <a href="#" className="relative h-[212px] sm:h-[360px]">
        <img
          className="w-full h-full object-cover rounded-md"
          src={image}
          alt={title}
        />
      </a>
      <div className="flex flex-col">
        <div className="flex">
          <span className="bg-green-200 rounded-full px-3 py-1 text-sm font-semibold text-green-600 mb-2">
            {category}
          </span>
        </div>
        <a href="#">
          <h2 className="font-bold text-xl mb-2 line-clamp-2 hover:underline">
            {title}
          </h2>
        </a>
        <p className="text-muted-foreground text-sm mb-4 flex-grow line-clamp-3">
          {description}
        </p>
        <div className="flex items-center text-sm">
          <img
            className="w-8 h-8 rounded-full mr-2"
            src={authorImage}
            alt={author}
          />
          <span>{author}</span>
          <span className="mx-2 text-gray-300">|</span>
          <span>{date}</span>
        </div>
      </div>
    </div>
  );
}