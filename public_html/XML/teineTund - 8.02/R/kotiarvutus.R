kotid = read.table("kotid.txt", sep=",", header=TRUE)
kotid$reamass = kotid$mass*kotid$kogus
kotid
write.table(kotid, file = "kotidvastus.txt", sep=",", row.names=FALSE)