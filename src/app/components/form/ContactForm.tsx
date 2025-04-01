"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import ContactModal from "../Modal/ContactModal";
import emailjs from "@emailjs/browser";

// EmailJS 초기화
emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!);

interface FormData {
  name: string;
  email: string;
  message: string;
}

function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormData>();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [msgLength, setMsgLength] = useState<number>(0);

  const onSubmit = async (data: FormData) => {
    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        { name: data.name, email: data.email, message: data.message },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );
      setIsOpen(true);
      reset();
      setMsgLength(0);
    } catch (error) {
      console.error("이메일 전송 실패", error);
    }
  };
  return (
    <div className="max-w-[800px] mx-auto p-10 bg-white rounded-[20px] shadow-md">
      <h1 className="text-[2.5rem] text-text-dark mb-4 text-center">
        문의하기
      </h1>
      <p className="text-center text-text-dark mb-12 text-[1.1rem] leading-7">
        저에 대해 궁금하신 점이 있다면 언제든 문의주세요
      </p>

      <form className="flex flex-col gap-6" onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-2">
          <label
            htmlFor="name"
            className="text-text-dark text-[1.1rem] font-medium"
          >
            이름
          </label>
          <input
            type="text"
            id="name"
            {...register("name", { required: "이름은 필수입니다." })}
            placeholder="홍길동"
            className={`w-full p-4 border border-gray-300 rounded-lg text-base transition-all ease-in-out duration-300 focus:outline-none focus:border-primary-color focus:ring-2 focus:ring-[rgba(0,191,179,0.1)] ${errors.name ? "border-red-500" : ""}`}
          />
          {errors.name && (
            <span className="text-red-500">{errors.name.message}</span>
          )}
        </div>
        <div className="flex flex-col gap-2">
          <label
            htmlFor="email"
            className="text-text-dark text-[1.1rem] font-medium"
          >
            이메일
          </label>
          <input
            type="email"
            id="email"
            {...register("email", { required: "이메일은 필수입니다." })}
            placeholder="example@email.com"
            className={`w-full p-4 border border-gray-300 rounded-lg text-base transition-all ease-in-out duration-300 focus:outline-none focus:border-primary-color focus:ring-2 focus:ring-[rgba(0,191,179,0.1)] ${errors.name ? "border-red-500" : ""}`}
          />
          {errors.email && (
            <span className="text-red-500">{errors.email.message}</span>
          )}
        </div>
        <div className="flex flex-col gap-2">
          <label
            htmlFor="message"
            className="text-text-dark text-[1.1rem] font-semibold"
          >
            문의내용
          </label>
          <textarea
            id="message"
            {...register("message", {
              required: "문의내용은 필수입니다.",
              maxLength: {
                value: 1000,
                message: "최대 1000자까지 입력 가능합니다.",
              },
            })}
            placeholder="문의하실 내용을 입력해주세요"
            rows={6}
            onChange={(e) => setMsgLength(e.target.value.length)}
            className={`w-full min-h-[150px] max-h-[300px] resize-y p-4 border border-gray-300 rounded-lg text-base transition-all ease-in-out duration-300 focus:outline-none focus:border-primary-color focus:ring-2 focus:ring-[rgba(0,191,179,0.1)] ${errors.message ? "border-red-500" : ""}`}
          />
          {errors.message && (
            <span className="text-red-500">{errors.message.message}</span>
          )}
          <span className="text-gray-500 text-sm">{msgLength} / 1000</span>
        </div>

        <button
          type="submit"
          className={`bg-primary-color text-white border-none py-4 px-8 text-[1.1rem] cursor-pointer transition-all duration-300 ease-in-out mt-4 w-full hover:bg-primary-dark hover:-translate-y-2 rounded-lg ${isSubmitting ? "opacity-50 cursor-not-allowed" : ""}`}
          disabled={isSubmitting}
        >
          {isSubmitting ? "제출 중..." : "문의 하기"}
        </button>
      </form>
      {isOpen && (
        <ContactModal
          message="문의가 성공적으로 제출되었습니다!"
          onClose={() => {
            setIsOpen(false);
            reset();
          }}
        />
      )}
    </div>
  );
}

export default ContactForm;
