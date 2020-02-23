import React from "react";
import { Button } from "antd";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { CoefficientTable } from "cocomo";

export const About: React.FC = () => {
  document.title = "Калькулятор COCOMO";
  return (
    <Wrapper>
      <h4>Что такое COCOMO?</h4>
      <p>
        <b>Constructive Cost Model</b> <i>(конструктивная модель стоимости)</i>{" "}
        – это способ оценки стоимости разработки программного обеспечения,
        разработанная Барри Боэмом.
      </p>
      <p>
        Базовый уровень рассчитывает трудоемкость и стоимость разработки как
        функцию от размера программы. Размер выражается в оценочных тысячах
        строк кода <code>KLoC</code> - <i>kilo lines of code</i>.
      </p>
      <p>COCOMO применим к трем классам проектов разработки ПО:</p>
      <ul>
        <li>
          <b>Органический</b> <i>(Organic mode)</i> – маленькие команды с
          хорошим опытом работы и не жесткими требованиями к разработке
        </li>
        <li>
          <b>Полуразделенный вид</b> <i>(Intermediate / Semi-detached mode)</i>{" "}
          – средние по размеру команды со смешанным опытом разработки и со
          смешанными требованиями (как жесткими, так и нет).
        </li>
        <li>
          <b>Встроенный вид</b> <i>(Intered / Embedded mode)</i> –
          разрабатываются с учетом множества жестких ограничений (по
          аппаратному, программному, операционному обеспечению и т.д.)
        </li>
      </ul>
      <hr />
      <h5>Базовые уравнения COCOMO</h5>
      <p>
        В зависимости от класса команды можно рассчитать три основных показателя
        стоимости разработки, подставив в формулы значения из таблицы.
      </p>
      <ul>
        <li>
          <b>Трудоемкость</b> <i>(человеко-месяцев)</i> –{" "}
          <code>
            a<sub>b</sub> × KLoC<sup> b<sub>b</sub></sup>
          </code>
        </li>
        <li>
          <b>Срок разработки</b> <i>(месяцев)</i> –{" "}
          <code>
            c<sub>b</sub> × Трудоемкость<sup> d<sub>b</sub></sup>
          </code>
        </li>
        <li>
          <b>Число разработчиков</b> <i>(человек)</i> –{" "}
          <code>Трудоемкость / Срок разработки</code>
        </li>
      </ul>
      <p>
        Коэффициенты a<sub>b</sub>, b<sub>b</sub>, c<sub>b</sub> и d<sub>b</sub>{" "}
        приведены в таблице ниже.
      </p>
      <hr />
      <h5>Таблица базовых коэффициентов</h5>
      <CoefficientTable />
      <p>
        В органических коммандах падает трудоёмкость, но растёт срок разработки.
        В слаженных командах срок разработки снижается, хотя общая трудоемкость
        растёт.
      </p>
      <hr />
      <h5>Общая информация</h5>
      <p>
        Модель использует простую формулу регрессии с параметрами, определенными
        из данных, собранных по ряду проектов. Возможность оценить трудозатраты,
        а также временной промежуток разработки нового программного обеспечения
        – задача весьма сложная, но при этом необходимая. Она позволяет
        спланировать расходы на время выполнения проекта, определить оптимальные
        сроки выполнения, что важно, так как слишком малый срок может повлиять
        как на снижение качества продукта, так и на физическую и психологическую
        усталость разработчиков.
      </p>
      <p>
        Существует достаточно много моделей оценки создания ПО, активно
        применяемых на практике, но, к сожалению, большинство из них уже
        достаточно устаревшие и доказавшие свою несостоятельность.
      </p>
      <p>
        Примером может служить метод линейного подхода, в котором применяется
        простейшая формула: <code>С = Т × Ц</code>, где Т — количественная мер
        трудозатрат, а Ц – удельная стоимость. Под мерой трудозатрат в основном
        понимается количество строк кода и временная производительность, другие
        аспекты не учитываются.
      </p>
      <p>
        Абсурдность данного метода можно доказать тем, что с опытом программист
        начинает писать более сжато и лаконично, что является плюсом для
        последующей отладки, доработке или изменения программы, но данный метод
        абсолютно не стимулирует программиста к таким действиям. Данный пример
        говорит об актуальности данной темы. При стремлении к повышению качества
        ПО, средства его оценки должны быть адекватны.
      </p>
      <p>
        В данное время нет идеального подхода к разрешению данной проблемы,
        однако, рассматривая модель COCOMO—II, по нашему мнению, наиболее полно
        и адекватно учитывает все аспекты разработки, не даром она стала одной
        из самых популярных. Модель COCOMO—II является наследником
        первоначальной модели COCOMO, которая к данному времени уже достаточно
        устарела, так как была представлена в 1981 г.
      </p>
      <hr />
      <Container>
        <Link to="/calc">
          <Button type="primary" size="large">
            Расчитать COCOMO
          </Button>
        </Link>
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin: 20px auto;
  max-width: 840px;

  & ul,
  & ol {
    margin-block-start: 1.3em;
    margin-block-end: 1.5em;
    margin-inline-start: 1em;
    margin-inline-end: 2em;
    padding-inline-start: 1em;
  }

  @media (max-width: 1050px) {
    max-width: 80vw;
  }

  @media (max-width: 520px) {
    max-width: calc(100vw - 48px);
  }
  @media (max-width: 400px) {
    max-width: calc(100vw - 36px);
    ul,
    ol {
      margin-inline-start: 0em;
      margin-inline-end: 0em;
      padding-inline-start: 0.75em;
    }
  }
`;

const Container = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  height: 60px;
`;
