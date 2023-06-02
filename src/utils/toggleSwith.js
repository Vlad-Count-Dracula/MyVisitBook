
// Для того что бы не дублировать код вынес в отдельный файл .

export const toggleSwitch = (toggleValue) => toggleValue(previousState => !previousState);