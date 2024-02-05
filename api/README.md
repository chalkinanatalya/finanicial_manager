# Личный финансовый менеджер

## Описание

Этот проект представляет собой сервер на Node.js для интенсива "Личный финансовый менеджер". Сервер обрабатывает данные о доходах и расходах, сохраняя их в JSON-файле. Также поддерживается работа с категориями доходов и расходов.

## Технологии

- Node.js
- Express
- uuid для генерации уникальных идентификаторов
- fs/promises для асинхронной работы с файловой системой

## Установка и запуск проекта

1. Клонировать репозиторий:

git clone <url-репозитория>

2. Перейти в директорию проекта:

cd <название-директории>

3. Установить зависимости:

npm install

4. Запустить проект:

- В режиме разработки:

  ```
  npm run dev
  ```

- В обычном режиме:

  ```
  npm start
  ```

## API Endpoints

- `GET /api/finance`: Получение всех записей о доходах и расходах, передав searchParams startDate и/или endDate можно отфильтровать по дате (формат ГГГГ-ММ-ДД)
- `POST /api/finance`: Добавление новой записи о доходе или расходе 
- `GET /api/categories`: Получение списка категорий
- `DELETE /api/finance/:id`: Удаление записи
- `GET /api/reset`: Сброс БД до стартового состояния
- `GET /api/test`: Получение тестовых записей

## Формат данных

Объекты о доходах и расходах имеют следующую структуру:

```json
{
  "id": "уникальный идентификатор",
  "type": "тип записи (income/outcome)",
  "amount": "сумма",
  "description": "описание операции",
  "category": "категория операции"
}
```

## Пример структуры категорий:

```json
{
  "income": ["Зарплата", "Подарки"],
  "outcome": ["Еда", "Транспорт", "Развлечения", "Образование"]
}
```

## Авторы

Ваше имя и контакты

## Лицензия

Этот проект распространяется под лицензией MIT. См. файл LICENSE для подробной информации.