# 🩺 Health Screener

`Health Screener was created for the Waterloo Engineering Competition (Spring 2022) and won first place 🏆`

## Inspiration

Canadian hospitals are constantly on the verge of collapsing, with resources and manpower diminshining every day. Our challenge for the Programming category of WEC 2022 was to help the triage system function more smoothly, and save hospitals time and money.

Our team was composed of three first-year students: a Mechatronics Engineer, a Computer Engineer, and a Systems Design Engineer. We used our common interest in web development to engineer our solution: [Health Screener](https://wec-programming-spring-2022.web.app/), a website that allows patients to receive a condition diagnosis, without needing to wait hours on end to see a nurse.

## How It Works

The Health Screener website has two text boxes. In the "Input Patient Information" area, users paste json information that includes the patient's name and symptoms, at minimum. Instantly, their diagnosis is outputted in the read-only "Patient Diagnosis" text area. It tells the patient what condition they may have, and which sector they should be admitted to at the hospital.

![Health Screener's input and output fields](https://media.discordapp.net/attachments/535232819853656114/1001562161874731089/unknown.png?width=1076&height=552)

To the very right is a heatmap of a human body. Depending on the location and severity of the patient's condition, specific parts of the body will change colour to display the affected area. Green means the area is unaffected, orange means affected, and red means affected and urgent.

![Heatmap of a concussion](https://media.discordapp.net/attachments/535232819853656114/1001563471244177420/unknown.png?width=458&height=611)

## Next Steps

As WEC gave us specific guidelines for the inputs and outputs, a third-party user attempting to use Health Screener would struggle with getting it to work. Because of this, we hope to implement an "example inputs" section, so users can see how the website functions without needing to come up with their own testcase. This would also help them to format their patient information. Similarly, Health Screener has only been programmed to parse through certain symptoms and connect them certain conditions, so we would like to increase our medical database, and be transparent with users on what we can and cannot diagnose.

Additionally, at the moment, Health Screener is only capable of diagnosing one patient at a time. Ideally, we would be able to implementing a queue system, so the user can input many patients, and go through the outputted diagnoses one by one (either automatically, or with a button). It would also be useful to have an "export diagnosis" feature so patients can save their results, as Health Screener itself does not save any information to preserve the privacy of its users.

Finally, Health Screener is capable of taking in biometrics such as age, height, and weight, but currently does not do anything with this information. Yet, we know that these factors can influence the possibility of having certain conditions. Therefore, we'd like to take into account this data when making our diagnoses.

All in all, our team did the best we could within eight hours. It was a great (and hectic) learning experience, and we had a lot of fun coming up with Health Screener :)

### Thanks for reading!
