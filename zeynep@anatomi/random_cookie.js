// Adım 1: Kullanıcıya 0 ile 1 arasında rastgele bir değer atama
const randomValue = Math.random();

// Adım 5: Varyant sayısını dinamik hale getirme (örneğin, 3 varyantlı bir test)
const numberOfVariants = 3;
const variantInterval = 1 / numberOfVariants;
let variant = 0;

// Değeri hangi varyanta atayacağımızı belirleme
for (let i = 0; i < numberOfVariants; i++) {
  if (randomValue <= (i + 1) * variantInterval) {
    variant = i;
    break;
  }
}

// Adım 2: Değeri 0.5'e göre tagleme
const variantTag = variant < 1 ? '0' : '1';

// Adım 3: Değeri cookie'e yazma
const cookieName = 'anatomi_ab_test_variation';

// Cookie süresini 2 yıl olarak ayarlama
const expirationDate = new Date();
expirationDate.setFullYear(expirationDate.getFullYear() + 2);

// Değeri cookie'e yazma ve süreyi ayarlama
document.cookie = `${cookieName}=${variantTag}; expires=${expirationDate.toUTCString()}; path=/`;









// Adım 1: Kullanıcıya 0 ile 1 arasında rastgele bir değer atama adımı
const random_value = Math.random();

// Adım 5: Varyant sayısını dinamik hale getirme (örneğin, 3 varyantlı bir test)
const number_variants = 3;
const variant_interval = 1 / number_variants;


let variant2 = 0;

// Değeri hangi varyanta atayacağımızı belirleme , Değeri 0.5'e göre atama
const variant_tag = variant2 < 0.5 ? '0' : '1';

// Değeri cookie'e yazma
const cookie_name = 'anatomi_ab_test_variation';

// Cookie süresini 2 yıl olarak ayarlama
const expiration_date = new Date();
expiration_date.setFullYear(expiration_date.getFullYear() + 2);

// Değeri cookie'e yazma ve süreyi ayarlama
document.cookie = `${cookie_name}=${variant_tag}; expires=${expiration_date.toUTCString()}; path=/`;


// kullanıcının rastgele bir varyanta atanmasını sağlar.
for (let i = 0; i < number_variants; i++) {
    if (random_value <= (i + 1) * variant_interval) {
      variant2 = i;
      break;
    }
  } 






