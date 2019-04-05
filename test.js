// Find the Languages category.
var category = _.find(window.OPENSHIFT_CONSTANTS.SERVICE_CATALOG_CATEGORIES,
                      { id: 'languages' });
// Add Go as a new subcategory under Languages.
category.subCategories.splice(2,0,{ // Insert at the third spot.
  // Required. Must be unique.
  id: "go",
  // Required.
  label: "Go",
  // Optional. If specified, defines a unique icon for this item.
  icon: "icon-go-gopher",
  // Required. Items matching any tag will appear in this subcategory.
  tags: [
    "go",
    "golang"
  ]
});

// Add a Featured category as the first category tab.
window.OPENSHIFT_CONSTANTS.SERVICE_CATALOG_CATEGORIES.unshift({
  // Required. Must be unique.
  id: "featured",
  // Required
  label: "Featured",
  subCategories: [
    {
      // Required. Must be unique.
      id: "go",
      // Required.
      label: "Go",
      // Optional. If specified, defines a unique icon for this item.
      icon: "icon-go-gopher",
      // Required. Items matching any tag will appear in this subcategory.
      tags: [
        "go",
        "golang"
      ]
    },
    {
      // Required. Must be unique.
      id: "jenkins",
      // Required.
      label: "Jenkins",
      // Optional. If specified, defines a unique icon for this item.
      icon: "icon-jenkins",
      // Required. Items matching any tag will appear in this subcategory.
      tags: [
        "jenkins"
      ]
    }
  ]
});












 	    id: "bigdatas",
            label: "Distributed",
            subCategories: [ {
                id: "hadoop",
                label: "hadoop-cluster",
                tags: [ "hadoop", "hadoop-master", "hadoop-slave" ],
                icon: "icon-hadoop"
            }, {
                id: "spark",
                label: "spark-cluster",
                tags: [ "spark" ],
                icon: "icon-elastic"
            }, {
                id: "mpi",
                label: "mpi-cluster",
                tags: [ "mpi", "mpis" ],
                icon: "icon-ansible"
            } ]
        }, {







{
            id: "machines",
            label: "Machines",
            subCategories: [ {
                id: "hadoop",
                label: "hadoop-cluster",
                tags: [ "hadoop", "hadoop-master", "hadoop-slave" ],
                icon: "icon-hadoop"
            }, {
                id: "tensorflow",
                label: "TenserFlow",
                tags: [ "tenserflow" ],
                icon: "icon-phalcon"
            }, {
                id: "mahout",
                label: "mahout",
                tags: [ "mahout" ],
                icon: "icon-memcached"
            }, {
                id: "storm",
                label: "storm-cluster",
                tags: [ "storm" ],
                icon: "icon-spring"
            } ]
        }, {
            id: "graphs",
            label: "Graphs",
            subCategories: [ {
                id: "hadoop",
                label: "hadoop-cluster",
                tags: [ "hadoop", "hadoop-master", "hadoop-slave" ],
                icon: "icon-hadoop"
            }, {
                id: "graph",
                label: "GridGraph",
                tags: [ "graph" ],
                icon: "icon-openjdk"
            }, {
                id: "regraph",
                label: "Regraph",
                tags: [ "regraph" ],
                icon: "icon-angularjs"
            } ]
        }, {





[信息记录]
 Username: mongodb
 Password: mongodb
 Database Name: sampledb
 Connection URL: mongodb://mongodb:mongodb@mongodb/sampledb




https://github.com/intel-hadoop/HiBench/issues/532

In the pom.xml:
https://oss.sonatype.org/content/groups/scala-tools/ --> https://mvnrepository.com/artifact/org.scala-tools/
*In the both places that it's mentioned

export JAVA_HOME=/usr/lib/jvm/java-8-openjdk-amd64
export HADOOP_INSTALL=/usr/local/hadoop
export HADOOP_HOME=$HADOOP_INSTALL
export PATH=$PATH:$HADOOP_INSTALL/bin
export PATH=$PATH:$HADOOP_INSTALL/sbin
export HADOOP_MAPRED_HOME=$HADOOP_INSTALL
export HADOOP_COMMON_HOME=$HADOOP_INSTALL
export HADOOP_HDFS_HOME=$HADOOP_INSTALL
export HADOOP_CONF_DIR=$HADOOP_INSTALL/etc/hadoop
export YARN_HOME=$HADOOP_INSTALL
export YARN_CONF_DIR=$HADOOP_INSTALL/etc/hadoop
export SCALA_HOME=/usr/local/scala
export SPARK_HOME=/usr/local/spark
export SPARK_BENCH=/root/spark-bench
export PATH=$PATH:$SCALA_HOME/bin:$SPARK_HOME/bin:$SPARK_HOME/sbin



BroadcastTest.scala		ExceptionHandlingTest.scala	LocalALS.scala		LocalLR.scala   MultiBroadcastTest.scala       	SparkALS.scala     		SparkLR.scala   	SparkTC.scala  mllib             		streaming			DFSReadWriteTest.sc
GroupByTest.scala            	LocalFileLR.scala  		LocalPi.scala   	SimpleSkewedGroupByTest.scala  	SparkHdfsLR.scala  		SparkPageRank.scala  	graphx         pythonconverters		DriverSubmissionTest.scala 	HdfsTest.scala          LocalKMeans.scala  LogQuery.scala  		SkewedGroupByTest.scala        	SparkKMeans.scala  	SparkPi.scala        ml             			sql






















