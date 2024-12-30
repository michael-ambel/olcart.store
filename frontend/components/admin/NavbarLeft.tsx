"use client";
import Link from "next/link";
import { FC, useState } from "react";

const NavbarLeft: FC = () => {
  const [active, setActive] = useState(1);

  return (
    <div className="fixed flex flex-col items-start justify-center gap-[20px] left-0 top-0 pt-[140px] px-[40px] text-[14px] w-[140px] h-full fill-mo bg-bgs">
      <Link
        href="/admin/?v=1"
        className="group flex flex-col justify-start items-start gap-[8px] w-full h-[70px]"
        onClick={() => setActive(1)}
      >
        <svg
          width="30"
          height="30"
          viewBox="0 0 30 30"
          xmlns="http://www.w3.org/2000/svg"
          className={`w-[30px] ${active === 1 ? "fill-mo" : "fill-bl"}`}
        >
          <path d="M1.66667 16.6667H11.6667C12.1087 16.6667 12.5326 16.4911 12.8452 16.1785C13.1577 15.8659 13.3333 15.442 13.3333 15V1.66667C13.3333 1.22464 13.1577 0.800716 12.8452 0.488155C12.5326 0.175595 12.1087 0 11.6667 0H1.66667C1.22464 0 0.800716 0.175595 0.488155 0.488155C0.175595 0.800716 0 1.22464 0 1.66667V15C0 15.442 0.175595 15.8659 0.488155 16.1785C0.800716 16.4911 1.22464 16.6667 1.66667 16.6667ZM0 28.3333C0 28.7754 0.175595 29.1993 0.488155 29.5118C0.800716 29.8244 1.22464 30 1.66667 30H11.6667C12.1087 30 12.5326 29.8244 12.8452 29.5118C13.1577 29.1993 13.3333 28.7754 13.3333 28.3333V21.6667C13.3333 21.2246 13.1577 20.8007 12.8452 20.4882C12.5326 20.1756 12.1087 20 11.6667 20H1.66667C1.22464 20 0.800716 20.1756 0.488155 20.4882C0.175595 20.8007 0 21.2246 0 21.6667V28.3333ZM16.6667 28.3333C16.6667 28.7754 16.8423 29.1993 17.1548 29.5118C17.4674 29.8244 17.8913 30 18.3333 30H28.3333C28.7754 30 29.1993 29.8244 29.5118 29.5118C29.8244 29.1993 30 28.7754 30 28.3333V16.6667C30 16.2246 29.8244 15.8007 29.5118 15.4882C29.1993 15.1756 28.7754 15 28.3333 15H18.3333C17.8913 15 17.4674 15.1756 17.1548 15.4882C16.8423 15.8007 16.6667 16.2246 16.6667 16.6667V28.3333ZM18.3333 11.6667H28.3333C28.7754 11.6667 29.1993 11.4911 29.5118 11.1785C29.8244 10.8659 30 10.442 30 10V1.66667C30 1.22464 29.8244 0.800716 29.5118 0.488155C29.1993 0.175595 28.7754 0 28.3333 0H18.3333C17.8913 0 17.4674 0.175595 17.1548 0.488155C16.8423 0.800716 16.6667 1.22464 16.6667 1.66667V10C16.6667 10.442 16.8423 10.8659 17.1548 11.1785C17.4674 11.4911 17.8913 11.6667 18.3333 11.6667Z" />
        </svg>
        <p className="hidden group-hover:block">Dashboard</p>
      </Link>

      <Link
        href="/admin/products/?v=2"
        className="group flex flex-col justify-start items-start gap-[8px] w-full h-[70px]"
        onClick={() => setActive(2)}
      >
        <svg
          width="34"
          height="33"
          viewBox="0 0 34 33"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={`w-[34px] ${active === 2 ? "fill-mo" : "fill-bl"}`}
        >
          <path d="M24.8313 11.1346C25.3627 10.9868 25.674 10.4367 25.5272 9.90501L24.0308 4.48596C23.8833 3.95177 23.3295 3.63941 22.796 3.78951L12.8458 6.58929C12.3225 6.73654 12.0127 7.27489 12.1483 7.80135L13.5432 13.2168C13.6828 13.7589 14.2403 14.0808 14.7796 13.9308L24.8313 11.1346Z" />
          <path d="M10.7722 18.7978C10.7739 18.7973 10.7757 18.7984 10.7761 18.8001C10.7765 18.8019 10.7783 18.8029 10.78 18.8024L11.8025 18.4934C12.3127 18.3392 12.6106 17.8101 12.4777 17.2939L8.21905 0.750701C8.10531 0.308839 7.70689 0 7.25063 0H1C0.447715 0 0 0.447715 0 1V1.56993C0 2.12222 0.447715 2.56993 1 2.56993H5.02425C5.4838 2.56993 5.8842 2.88315 5.99484 3.32919L9.78825 18.6233C9.84757 18.8624 10.0952 19.0031 10.331 18.9316L10.7722 18.7978Z" />
          <path d="M33.5126 21.5262C33.4925 21.5317 33.4718 21.5195 33.467 21.4992L33.3548 21.0275C33.2885 20.7486 33.0038 20.5807 32.7277 20.6575L21.8627 23.6802C21.3166 23.8321 21.0058 24.4071 21.1779 24.9472L21.5226 26.029C21.6874 26.546 22.2342 26.8372 22.7551 26.6855L33.1046 23.6707C33.606 23.5247 33.9048 23.0111 33.784 22.5031L33.5582 21.5532C33.5534 21.5329 33.5327 21.5207 33.5126 21.5262Z" />
          <path d="M18.3897 23.4744C18.2384 23.1857 18.2702 22.8266 18.5007 22.5961C18.7679 22.3288 18.768 21.8954 18.5008 21.6281L17.8729 20.9999C17.6055 20.7325 17.1719 20.7326 16.9047 21.0002C16.6746 21.2307 16.3159 21.2628 16.0273 21.1118C15.8135 20.9998 15.5915 20.9015 15.3624 20.8172C15.0454 20.7006 14.8151 20.4102 14.8151 20.0725C14.8151 19.6629 14.4831 19.3308 14.0735 19.3308H12.724C12.3145 19.3308 11.9826 19.6627 11.9826 20.0722C11.9826 20.4101 11.7521 20.7004 11.4349 20.8168C11.1865 20.908 10.9461 21.0157 10.7157 21.1393C10.4396 21.2873 10.0941 21.2574 9.87272 21.0359C9.61706 20.78 9.20234 20.7799 8.94657 21.0357L8.28756 21.6947C8.02592 21.9563 8.02592 22.3805 8.28756 22.6422C8.51178 22.8664 8.5441 23.2153 8.39801 23.4967C8.29063 23.7036 8.19593 23.9181 8.11439 24.139C7.99752 24.4557 7.70737 24.6857 7.36983 24.6857C6.96036 24.6857 6.62842 25.0176 6.62842 25.4271V26.7755C6.62842 27.1849 6.96028 27.5168 7.36966 27.5168C7.70726 27.5168 7.99743 27.7469 8.11388 28.0638C8.19836 28.2937 8.29699 28.5166 8.40937 28.7313C8.56039 29.0198 8.5284 29.3785 8.29806 29.6086C8.03067 29.8758 8.03063 30.3092 8.29797 30.5764L8.92557 31.2037C9.19299 31.471 9.62645 31.471 9.89381 31.2036C10.1243 30.9732 10.4833 30.9413 10.7719 31.0926C10.9873 31.2054 11.2111 31.3044 11.4419 31.389C11.7587 31.5052 11.9891 31.7951 11.9891 32.1325C11.9891 32.5411 12.3203 32.8724 12.7289 32.8724H14.0713C14.4797 32.8724 14.8108 32.5413 14.8108 32.1329C14.8108 31.7953 15.0414 31.5054 15.3583 31.3888C15.5697 31.311 15.7751 31.2209 15.9736 31.1194C16.2742 30.9658 16.6452 31.0004 16.884 31.239C17.1632 31.5179 17.6156 31.518 17.8948 31.239L18.4904 30.6439C18.7638 30.3708 18.764 29.9279 18.491 29.6544C18.2547 29.4177 18.2233 29.0487 18.3796 28.7529C18.4976 28.5295 18.6007 28.297 18.6882 28.0571C18.8039 27.7398 19.0939 27.5088 19.4316 27.5088C19.8398 27.5088 20.1707 27.1779 20.1707 26.7698V25.4362C20.1707 25.0277 19.8395 24.6965 19.431 24.6965C19.0935 24.6965 18.8036 24.466 18.6877 24.149C18.6028 23.9166 18.5033 23.6913 18.3897 23.4744ZM13.3996 28.423C12.1175 28.423 11.0785 27.384 11.0785 26.1012C11.0785 24.8199 12.1175 23.7802 13.3996 23.7802C14.6809 23.7802 15.7206 24.8192 15.7206 26.1012C15.7206 27.384 14.6809 28.423 13.3996 28.423Z" />
          <path d="M14.9141 18.1632C15.0436 18.6705 15.5447 18.9793 16.0683 18.9795C18.18 18.9804 19.3164 20.3472 19.4445 20.5103C19.4533 20.5215 19.4618 20.5312 19.4719 20.5413C19.4935 20.5644 19.5108 20.586 19.531 20.6084C19.7913 20.9297 19.9861 21.3909 20.0194 21.4724C20.0229 21.4809 20.0259 21.4893 20.0287 21.498C20.0936 21.7019 20.3081 21.818 20.5143 21.761L33.0414 18.301C33.5715 18.1545 33.8839 17.6075 33.7406 17.0765L32.2772 11.655C32.1329 11.1203 31.5815 10.8048 31.0474 10.9512L15.1965 15.2961C14.6705 15.4403 14.357 15.9793 14.4918 16.5077L14.9141 18.1632Z" />
        </svg>
        <p className="hidden group-hover:block">Products</p>
      </Link>

      <Link
        href="/admin/users/?v=3"
        className="group flex flex-col justify-start items-start gap-[8px] w-full h-[70px]"
        onClick={() => setActive(3)}
      >
        <svg
          width="30"
          height="32"
          viewBox="0 0 30 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={`w-[30px] ${active === 3 ? "fill-mo" : "fill-bl"}`}
        >
          <path d="M15 15C19.1421 15 22.5 11.6421 22.5 7.5C22.5 3.35786 19.1421 0 15 0C10.8579 0 7.5 3.35786 7.5 7.5C7.5 11.6421 10.8579 15 15 15Z" />
          <path d="M30 28.125V30C30 30.4973 29.8025 30.9742 29.4508 31.3258C29.0992 31.6775 28.6223 31.875 28.125 31.875H1.875C1.37772 31.875 0.900806 31.6775 0.549175 31.3258C0.197544 30.9742 0 30.4973 0 30V28.125C0 25.1413 1.18526 22.2798 3.29505 20.17C5.40483 18.0603 8.26631 16.875 11.25 16.875H18.75C21.7337 16.875 24.5952 18.0603 26.705 20.17C28.8147 22.2798 30 25.1413 30 28.125Z" />
        </svg>
        <p className="hidden group-hover:block">Users</p>
      </Link>

      <Link
        href="/admin/orders/?v=4"
        className="group flex flex-col justify-start items-start gap-[8px] w-full h-[70px]"
        onClick={() => setActive(4)}
      >
        <svg
          width="30"
          height="35"
          viewBox="0 0 30 35"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={`w-[30px] ${active === 4 ? "fill-mo" : "fill-bl"}`}
        >
          <path d="M27.8571 10.7143H23.0357V8.03571C23.0357 3.60469 19.433 0 15 0C10.567 0 6.96429 3.60469 6.96429 8.03571V10.7143H2.14286C0.959598 10.7143 0 11.6719 0 12.8571V28.9286C0 31.8884 2.39866 34.2857 5.35714 34.2857H24.6429C27.6013 34.2857 30 31.8871 30 28.9286V12.8571C30 11.6719 29.0424 10.7143 27.8571 10.7143ZM10.1786 8.03571C10.1786 5.37723 12.3415 3.21429 15 3.21429C17.6585 3.21429 19.8214 5.37723 19.8214 8.03571V10.7143H10.1786V8.03571ZM8.57143 16.6071C7.6875 16.6071 6.96429 15.8906 6.96429 15C6.96429 14.1094 7.6875 13.3929 8.57143 13.3929C9.45536 13.3929 10.1786 14.1161 10.1786 15C10.1786 15.8839 9.46205 16.6071 8.57143 16.6071ZM21.4286 16.6071C20.5413 16.6071 19.8214 15.8873 19.8214 15C19.8214 14.1127 20.5446 13.3929 21.4286 13.3929C22.3125 13.3929 23.0357 14.1161 23.0357 15C23.0357 15.8839 22.3192 16.6071 21.4286 16.6071Z" />
        </svg>
        <p className="hidden group-hover:block">Orders</p>
      </Link>

      <Link
        href="/admin/analysis/?v=5"
        className="group flex flex-col justify-start items-start gap-[8px] w-full h-[70px]"
        onClick={() => setActive(5)}
      >
        <svg
          width="30"
          height="30"
          viewBox="0 0 30 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={`w-[30px] ${active === 5 ? "fill-mo" : "fill-bl"}`}
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M30 8.07692C30 7.44 29.4831 6.92308 28.8462 6.92308H24.2308C23.5938 6.92308 23.0769 7.44 23.0769 8.07692V28.8462C23.0769 29.4831 23.5938 30 24.2308 30H28.8462C29.4831 30 30 29.4831 30 28.8462V8.07692ZM6.92308 15C6.92308 14.3631 6.40615 13.8462 5.76923 13.8462H1.15385C0.516923 13.8462 0 14.3631 0 15V28.8462C0 29.4831 0.516923 30 1.15385 30H5.76923C6.40615 30 6.92308 29.4831 6.92308 28.8462V15ZM18.4615 1.15385C18.4615 0.516923 17.9446 0 17.3077 0H12.6923C12.0554 0 11.5385 0.516923 11.5385 1.15385V28.8462C11.5385 29.4831 12.0554 30 12.6923 30H17.3077C17.9446 30 18.4615 29.4831 18.4615 28.8462V1.15385Z"
          />
        </svg>
        <p className="hidden group-hover:block">Analysis</p>
      </Link>
      <Link
        href="/admin/products/category/?v=5"
        className="group flex flex-col justify-start items-start gap-[8px] w-full h-[70px]"
        onClick={() => setActive(5)}
      >
        <svg
          width="30"
          height="30"
          viewBox="0 0 30 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={`w-[30px] ${active === 5 ? "fill-mo" : "fill-bl"}`}
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M30 8.07692C30 7.44 29.4831 6.92308 28.8462 6.92308H24.2308C23.5938 6.92308 23.0769 7.44 23.0769 8.07692V28.8462C23.0769 29.4831 23.5938 30 24.2308 30H28.8462C29.4831 30 30 29.4831 30 28.8462V8.07692ZM6.92308 15C6.92308 14.3631 6.40615 13.8462 5.76923 13.8462H1.15385C0.516923 13.8462 0 14.3631 0 15V28.8462C0 29.4831 0.516923 30 1.15385 30H5.76923C6.40615 30 6.92308 29.4831 6.92308 28.8462V15ZM18.4615 1.15385C18.4615 0.516923 17.9446 0 17.3077 0H12.6923C12.0554 0 11.5385 0.516923 11.5385 1.15385V28.8462C11.5385 29.4831 12.0554 30 12.6923 30H17.3077C17.9446 30 18.4615 29.4831 18.4615 28.8462V1.15385Z"
          />
        </svg>
        <p className="hidden group-hover:block">category</p>
      </Link>
    </div>
  );
};

export default NavbarLeft;
