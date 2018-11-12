
CREATE DATABASE fan_theories_db;

USE fan_theories_db;

CREATE TABLE theories(
    id INTEGER(10) NOT NULL AUTO_INCREMENT,
    media_name VARCHAR(30) NOT NULL,
    creator VARCHAR(30) NOT NULL,
    date_posted TIMESTAMP,
    theory VARCHAR(160) NOT NULL,
    PRIMARY KEY (id)
);

INSERT INTO theories (media_name, creator, theory) VALUES ("Hold the Dark (Netflix)", "blaney83", "At the end of the movie when the sherrif gets shot with an arrow, I don't think he survived to see the fugitives captured.");
INSERT INTO theories (media_name, creator, theory) VALUES ("How it Ends (Netflix)", "blaney83", "Due to the eruption of an unknown volcano (likely Mt. Rainier), it's highly unlikely they escaped.");
INSERT INTO theories (media_name, creator, theory) VALUES ("Inception", "blaney83", "The top definitely never stopped spinning.");
INSERT INTO theories (media_name, creator, theory) VALUES ("The Blaire Witch Project", "blaney83", "There was definitely a witch and it definitely killed them all.");
INSERT INTO theories (media_name, creator, theory) VALUES ("The Blaire Witch Project2", "blaney83", "TOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO LOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOONNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGG");

SELECT * FROM theories;