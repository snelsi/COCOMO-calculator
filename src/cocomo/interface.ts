/** Константы, которые нужны для расчёта базовой модели COCOMO */
export interface modeCoefficients {
  ab: number;
  bb: number;
  cb: number;
  db: number;
  ai: number;
  bi: number;
}

/** Органический (Organic mode) – маленькие команды с хорошим опытом работы и не жесткими требованиями к разработке */
export const Organic: modeCoefficients = {
  ab: 2.4,
  bb: 1.05,
  cb: 2.5,
  db: 0.38,
  ai: 3.2,
  bi: 1.05
};

/**  Полуразделенный вид (Intermediate/Semi-detached mode) – средние по размеру команды
 * со смешанным опытом разработки и со смешанными требованиями (как жесткими, так и нет). */
export const Semidetach: modeCoefficients = {
  ab: 3,
  bb: 1.12,
  cb: 2.5,
  db: 0.35,
  ai: 3,
  bi: 1.12
};

/** Встроенный вид (Intered/Embedded mode) – разрабатываются с учетом множества жестких ограничений
 * (по аппаратному, программному, операционному обеспечению и т.д.) */
export const Embedded: modeCoefficients = {
  ab: 3.6,
  bb: 1.2,
  cb: 2.5,
  db: 0.32,
  ai: 2.8,
  bi: 1.2
};

// prettier-ignore-start
type oneSixrating =  0 | 1 | 2 | 3 | 4 | 5 | 6;
type oneFiveRating = 0 | 1 | 2 | 3 | 4 | 5;
type oneFourRating = 0 | 1 | 2 | 3 | 4;
type twoFiveRating =         2 | 3 | 4 | 5;
type threeSixRating =            3 | 4 | 5 | 6;

/** Средний уровень рассчитывает трудоемкость разработки как функцию от размера программы
 * и множества «факторов стоимости», включающих субъективные оценки характеристик продукта,
 * проекта, персонала и аппаратного обеспечения. Каждому из 15 факторов ставится рейтинг
 * по шестибальной шкале, начиная от «очень низкий» и до «экстра высокого».
 * Значения рейтинга заменяются множителями трудоемкости из таблицы costDrivers.
 * Произведение всех множителей трудоемкости составляет Регулирующий фактор трудоемкости (РФТ) */
export interface ratingFactor {
  /* Характеристики продукта */
  reliability:              oneFiveRating;  // Требуемая надежность ПО
  sizeOfDatabase:           twoFiveRating;  // Размер БД приложения
  Complexity:               oneSixrating;   // Сложность продукта

  /* Характеристики аппаратного обеспечения */
  performanceConstraints:   threeSixRating;  // Ограничения быстродействия при выполнении программы
  memoryConstraints:        threeSixRating;  // Ограничения памяти
  environmentVolatility:    twoFiveRating;   // Неустойчивость окружения виртуальной машины
  turnaboutTime:            twoFiveRating;   // Требуемое время восстановления

  /* Характеристики персонала */
  analystCapability:        oneFiveRating;  // Аналитические способности
  applicationsExperience:   oneFiveRating;  // Способности к разработке ПО
  programmerCapability:     oneFiveRating;  // Опыт разработки
  virtualMachineExperience: oneFourRating;  // Опыт использования виртуальных машин
  languageExperience:       oneFourRating;  // Опыт разработки на языках программирования

  /* Характеристики проекта */
  applicationMethods: oneFiveRating;  // Использование инструментария разработки ПО
  softwareTools:      oneFiveRating;  // Применение методов разработки ПО
  requiredSchedule:   oneFiveRating;  // Требования соблюдения графика разработки
}

export const costDrivers = {
  reliability:              [0.75, 0.88, 1, 1.15, 1.40, null],  // Требуемая надежность ПО
  sizeOfDatabase:           [null, 0.94, 1, 1.08, 1.16, null],  // Размер БД приложения
  Complexity:               [0.70, 0.85, 1, 1.15, 1.30, 1.65],  // Сложность продукта

  /* Характеристики аппаратного обеспечения */
  performanceConstraints:   [null, null, 1, 1.11, 1.30, 1.66],  // Ограничения быстродействия при выполнении программы
  memoryConstraints:        [null, null, 1, 1.06, 1.21, 1.56],  // Ограничения памяти
  environmentVolatility:    [null, 0.87, 1, 1.15, 1.30, null],  // Неустойчивость окружения виртуальной машины
  turnaboutTime:            [null, 0.87, 1, 1.07, 1.15, null],  // Требуемое время восстановления

  /* Характеристики персонала */
  analystCapability:        [1.46, 1.19, 1, 0.86, 0.71, null],  // Аналитические способности
  applicationsExperience:   [1.29, 1.13, 1, 0.91, 0.82, null],  // Способности к разработке ПО
  programmerCapability:     [1.42, 1.17, 1, 0.86, 0.7,  null],  // Опыт разработки
  virtualMachineExperience: [1.21, 1.10, 1, 0.9,  null, null],  // Опыт использования виртуальных машин
  languageExperience:       [1.14, 1.07, 1, 0.95, null, null],  // Опыт разработки на языках программирования

  /* Характеристики проекта */
  applicationMethods:       [1.24, 1.10, 1, 0.91, 0.82, null],  // Использование инструментария разработки ПО
  softwareTools:            [1.24, 1.10, 1, 0.91, 0.83, null],  // Применение методов разработки ПО
  requiredSchedule:         [1.23, 1.08, 1, 1.04, 1.10, null],  // Требования соблюдения графика разработки
};
