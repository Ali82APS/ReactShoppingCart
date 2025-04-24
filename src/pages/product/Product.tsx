import { useParams } from 'react-router-dom'
import Container from '../../components/container/Container'
import Button from '../../components/button/Button'

function Product() {

    const params = useParams()
  return (
    <div>
      <Container>
        <div className="h-96 shadow mt-4 grid grid-cols-12">
          <div className=" col-span-10 text-right p-4">
            <h1>عنوان محصول</h1>
            <div>
              <p className="my-2">قیمت:2500000ريال</p>
              <p>
                برای دریافت مستقیم انرژی مثبت و داشتن روحیه قوی ورزش و سفر دو
                گزینه عالی هستند که اولی باید در برنامه روزانه و دومی در هر بازه
                زمانی که امکانش هست، گنجانده شوند. برای اینکه بتوانید از سفر خود
                بیشترین لذت را ببرید یا ورزش کردن را با راحتی بیشتری همراه کنید،
                به تجهیزات مختلفی نیاز پیدا خواهید کرد؛ تجهیزاتی جزئی یا کلی که
                هر کدام بسته به اهداف مسافرتی یا ورزشی شما متفاوت خواهند بود.
                اگر قصد آشنایی با بهترین انواع تجهیزات سفر یا ورزش را دارید و
                دوست دارید از بین گزینه‌های متنوع با قدرت انتخاب بالا، خریدتان
                را انجام دهید، هزاران محصول موجود در دیجی کالا را از دست ندهید.
                در ادامه با بخشی از مهم‌ترین این محصولات بیشتر آشنا خواهید شد.
              </p>
            </div>
          </div>
          <div className="bg-stone-200 col-span-2 p-4">
            <img
              className="rounded"
              src="https://4kwallpapers.com/images/walls/thumbs_2t/8710.jpg"
              alt=""
            />
            <div>
              <Button
                className="mt-2  w-full !py-3"
                variant="primary"
                onClick={() => {
                  alert("Here");
                }}
                id="btn"
              >
                Add to Cart
              </Button>
              
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Product
