<template>
  <div class="footer">
    <div class="container-fluid">
      <div class="footer__info row">
        <div class="footer__workhours col-12  col-md-6 col-lg-3">
          <h4>Режим работы:</h4>
          <span>Ежедневно 09:00 - 20:00</span>
        </div>
        <div class="footer__phone col-12 col-md-6 col-lg-3">
          <a
            href="tel:+79533545699"
          >
            +7(953)354-56-99
          </a>
        </div>
        <div class="footer__email col-12 col-md-6 col-lg-3">
          sk.domland@gmail.com
        </div>
        <div class="footer__copyright col-12 col-md-6 col-lg-3">
          <p>© ООО СК "ДомЛэнд" 2021</p>
        </div>
      </div>
      <div class="row">
        <div class="footer__terms col-12">
          <p>
            Сайт носит исключительно информационный характер и не является публичной офертой, определяемой положениями
            ГК
            РФ.
            Для получения подробной информации о наличии, видах, характеристиках и стоимости домов обращайтесь в офис
            продаж.
          </p>
        </div>
      </div>
      <div class="row">
        <div class="fog col-12">
          <p>
            A part of FogFamily. Designed and developed by FogStudio LTD, Aleksey Tumanov. All rights reserved
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Footer',
  components: {},
};
</script>

<style scoped>
.footer {
  justify-self: flex-end;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  padding: 30px 30px 20px;
  border-top: 1px solid #722311;
  background: #f9f9f9;
}

.footer__info {
  align-items: center;
  width: 100%;
  color: #722311;
}

.footer__phone a, .footer__email {
  color: #722311;
}

.footer__terms {
  margin-top: 30px;
  display: flex;
  color: #465162;
  font-size: 10px;
}

.footer__copyright {
  font-size: 12px;
}

.fog {
  font-size: 1px;
  color: #f9f9f9;
}

</style>
