import {
  modeCoefficients,
  Organic,
  Semidetach,
  Embedded,
  costDrivers
} from "cocomo";
import { ratingFactor } from "./interface";

// Базовые уравнения COCOMO:

// Трудоемкость = ab(KLoC)bb [человеко-месяцев]
// Срок разработки или длительность = cb(Трудоемкость)db [месяцев]
// Число разработчиков = Трудоемкость/ Срок разработки [человек]

/** Трудоемкость = ab(KLoC)bb [человеко-месяцев] */
export const personMonths = ({ ab, bb }: modeCoefficients, KLoC: number) =>
  ab * KLoC ** bb;

/** Срок разработки или длительность = cb(Трудоемкость)db [месяцев] */
export const months = (coefficients: modeCoefficients, KLoC: number) =>
  coefficients.cb * personMonths(coefficients, KLoC) ** coefficients.db;

/** Число разработчиков = Трудоемкость/ Срок разработки [человек] */
export const persons = (team: modeCoefficients, KLoC: number) =>
  !KLoC ? 0 : personMonths(team, KLoC) / months(team, KLoC);

/** Принимает тип команды, количество тысяч строк кода и возвращает объект
 *  с рассчитаными трудоёмкостью, сроком разработки в месяцах
 *  и рекоммендуемое число разработчиков */
export const calculateBasicCocomo = (
  team: "organic" | "semidetach" | "embedded",
  KLoC: number
) => {
  const coefficients = getMode(team);
  return {
    personMonths: personMonths(coefficients, KLoC),
    months: months(coefficients, KLoC),
    persons: persons(coefficients, KLoC)
  };
};

/** Возвращает коэффициенты одного из трёх базовых типов команд */
const getMode = (team: "organic" | "semidetach" | "embedded") => {
  if (team === "organic") return Organic;
  if (team === "semidetach") return Semidetach;
  if (team === "embedded") return Embedded;
  throw new Error(
    `Переданный режим '${team}' не соответсвует одному из трёх базовых типов!`
  );
};

/** E = ai * (KLoC ^ bi) * РФТ
 *  E – трудоемкость разработки ПО в человеко-месяцах,
 *  KLoC – оценочный размер программы в тысячах строках исходного кода,
 *  РФТ – регулирующий фактор, рассчитанный ранее.
 */
export const calculateIntermediateCocomo = (
  team: "organic" | "semidetach" | "embedded",
  KLoC: number,
  drivers: ratingFactor
) => {
  const { ai, bi } = getMode(team);
  const values = Object.entries(drivers).map(
    ([key, value]) => costDrivers[key][value - 1]
  );

  const RFT: number = values.reduce(Multiply, 1);

  return ai * KLoC ** bi * RFT;
};

const Multiply = (total: number, value: number) => total * value;
