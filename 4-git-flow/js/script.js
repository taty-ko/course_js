"use strict"; 

// Git - программа-система контроля версий. Создает точки отсчета изменений
// GitHub - хранилище удаленных репозиториев.

// git init - инициализирует рабочую папку, создает файл .git.
// Чтоб посмотреть скрытые файлы нужно ввести "command"+"shift"+"."

// git config --local use.name "Tatyko" - локально, только в рамках одного конкретного проекта.
// git config --global use.name "Tatyko" - глобально, на весь компьютер и проекты


// git add -A - добавить все ALL файлы в "вотчер" гита.
// git add main.css - вместо "-А", можно добавить клонкретный файл, написав его название и расширение.
// git add *.css - звездочка доабвляет все файлы одного расширения.

// git status - проверяет есть ли коммиты, изменения в файлах в одной определенной ветке, например в master.

// git commit -a -m"First commit" - первый коммит. "-а" - добавляем все изменения. -m",,,," - комментарий для коммита.
// git log - показывает когда и какие коммиты были сделаны.

//git remote add origin git@github.com:taty-ko/course_js.git - когда создали удаленный репозиторий. Скопировали "2й сценарий команд". Вставили в терминал.
// git push -u origin main - пушим изменения.
// cd .. - входим на шаг назад.
// cd name - переходиму у папку, назва якої name.
// git pull - стягивает обновления (коммиты) с удаленного репозитория.

// Если мы добавили изменения и не спуллили сначала старые изменения, то 
// после того, как терминал выдал ошибку - нужно добавить комментарий (коммит)
// control+c двоеточие ":" и затем "wq!" и начать enter.

// Git ignore
//