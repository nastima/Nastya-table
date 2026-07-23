import {
    Paper,
    Typography,
    Select,
    MenuItem,
    Slider,
    Checkbox,
    FormControlLabel,
    Button,
} from "@mui/material";


export const ScenarioParameters = () => {
    return (
        <Paper
            elevation={3}
            className="
                p-5
                rounded-2xl
            "
        >
            <Typography
                variant="h6"
                fontWeight={600}
            >
                Параметры сценария
            </Typography>

            <div className="
                mt-6
                flex
                flex-col
                gap-6
            ">

                {/* Шаблон */}
                <div>
                    <Typography
                        variant="body2"
                        className="mb-2"
                    >
                        Шаблон сценария
                    </Typography>

                    <Select
                        fullWidth
                        defaultValue="transport"
                    >
                        <MenuItem value="transport">
                            Рост стоимости перевозки
                        </MenuItem>

                        <MenuItem value="warehouse">
                            Закрытие склада
                        </MenuItem>

                        <MenuItem value="demand">
                            Изменение спроса
                        </MenuItem>
                    </Select>
                </div>

                {/* Slider */}
                <div>
                    <Typography
                        variant="body2"
                    >
                        Изменение тарифа перевозчика
                    </Typography>

                    <Slider
                        defaultValue={15}
                        min={0}
                        max={100}
                        valueLabelDisplay="auto"
                    />
                </div>

                {/* Склад */}
                <div>
                    <Typography
                        variant="body2"
                    >
                        Склад
                    </Typography>

                    <Select
                        fullWidth
                        defaultValue="moscow"
                    >
                        <MenuItem value="moscow">
                            Москва
                        </MenuItem>

                        <MenuItem value="novosibirsk">
                            Новосибирск
                        </MenuItem>

                        <MenuItem value="kazan">
                            Казань
                        </MenuItem>
                    </Select>
                </div>

                {/* Чекбоксы */}
                <div>
                    <FormControlLabel
                        control={
                            <Checkbox/>
                        }
                        label="
                        Учитывать сезонность
                        "
                    />

                    <FormControlLabel
                        control={
                            <Checkbox/>
                        }
                        label="
                        Учитывать изменение спроса
                        "
                    />
                </div>

                <Button
                    variant="contained"
                    size="large"
                >
                    Запустить симуляцию
                </Button>
            </div>
        </Paper>
    );
};