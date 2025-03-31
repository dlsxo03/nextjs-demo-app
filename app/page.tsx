import Image from 'next/image';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <h1 className="text-4xl font-bold mb-8">Next.js 데모 앱에 오신 것을 환영합니다!</h1>
      </div>

      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-3 lg:text-left">
        <div className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100">
          <h2 className="mb-3 text-2xl font-semibold">
            문서 보기
          </h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">
            Next.js 문서를 통해 자세한 내용을 알아보세요.
          </p>
        </div>

        <div className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100">
          <h2 className="mb-3 text-2xl font-semibold">
            예제 학습
          </h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">
            다양한 예제를 통해 Next.js를 배워보세요.
          </p>
        </div>

        <div className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100">
          <h2 className="mb-3 text-2xl font-semibold">
            배포하기
          </h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">
            Vercel을 통해 손쉽게 배포해보세요.
          </p>
        </div>
      </div>
    </main>
  );
}