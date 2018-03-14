Zonemaster Master Test Plan
===========================

Introduction

This section gives a brief introduction to Zonemaster.

### Background

DNSCheck from IIS and Zonecheck from AFNIC are two different software
packages that do DNS validation of the quality of a DNS
delegation. The Zonemaster implementation intends to be a major
rewrite of these software packages, and implement the best parts of
both.

### Purpose

The purpose of Zonemaster is to test the quality of a DNS
delegation. The core of the software is all the implemented
tests. There will be a command line tool to run a complete set of
tests, and a web interface tailored for use by both basic and advanced
users.

### Goals

The goal of this document is to give an overview of the requirements
and the test levels. Each of the requirements will be broken down into
a set of test procedures. The process of doing this will be done in
accordance with the standard IEEE 829-2008.

The test requirements are all documented in the 
[Test Requirements](../../requirements/TestRequirements.md) document.

### Scope

Only the current test cases derived from the current versions of
DNSCheck and Zonecheck will be described as requirements. These
documents will not describe the functionality of any software
implementing the test cases. Some test cases derived from the current
software will not be implemented as test cases in the New DNSCheck.

The [current requirements](../../requirements/TestRequirements.md)
documents is the base directive on what these test specifications
will implement.

### References
#### External

The current implemented tests in DNSCheck are described here:  
<https://github.com/dotse/dnscheck/wiki/Tests>  
<https://github.com/dotse/dnscheck/wiki/Detailed-list-of-all-possible-dnscheck-messages>

The current implemented tests in Zonecheck
are described in [ExistingZCPolicy.md](
../../internal-documentation/requirements/ExistingZCPolicy.md).

#### Internal
No internal requirements.
#### Document hieararchy
* Master Test Plan  
    * [Basic Test Plan](#list-of-basic-tests)
        * Test Case x
    * [Delegation Test Plan](#list-of-delegation-tests)
        * Test Case x
    * [Consistency Test Plan](#list-of-consistency-tests)
        * Test Case x
    * [DNSSEC Test Plan](#list-of-dnssec-tests)
        * Test Case x
    * [Address Test Plan](#list-of-address-tests)
        * Test Case x
    * [Name Server Test Plan](#list-of-nameserver-tests)
        * Test Case x
    * [Connectivity Test Plan](#list-of-connectivity-tests)
        * Test Case x
    * [Zone Test Plan](#list-of-zone-tests)
        * Test Case x
    * [Syntax Test Plan](#list-of-syntax-tests)
	    * Test Case x

### System overview and key features

A domain will be tested for the quality of the delegation in the DNS
hierarchy. Some of the high level properties that will be tested
include:

 * [**Basic**](#list-of-basic-tests) (initial tests)
 * [**Delegation**](#list-of-delegation-tests) properties (parent and child
   name servers)  
 * [**Consistency**](#list-of-consistency-tests) (all name have consistent
   answers)
 * [**DNSSEC**](#list-of-dnssec-tests) properties (algorithms, secure
   delegation)  
 * [**Address**](#list-of-address-tests) properties (IP addresses)  
 * [**Name server**](#list-of-nameserver-tests) properties 
 * Name server [**Connectivity**](#list-of-connectivity-tests)
 * [**Zone**](#list-of-zone-tests) properties (are data controlling the zone
   sane)
 * [**Syntax**](#list-of-syntax-tests) (illegal hostnames and characters)

A domain can be given to the testing system and all DNS information
will be retrieved from the public global DNS hierarchy, or a set of
pre-delegation data can be given to test a domain not yet published in
the global DNS hierarchy. A complete set of DNS queries and answers
can also be given as the input to the system for repeat testing.

### Test overview

The test organization, test schedule, integrity level scheme, test
resources, responsibilities, tools, techniques, and methods are
necessary to perform the testing.

#### Organization

A test is run on any machine where the Zonemaster software is
available. The tests ordinarily needs access to a complete DNS
hierarchy to be performed.

#### Master test schedule

A test is run as soon as the software is scheduled to run, often
immediately upon execution.

The first tests that are supposed to run are those from the Basic test
plan. If those tests succeeds, the rest of the test plans are run in
no specific order.

#### Integrity level schema

An integrity level schema is used for illustrating relative importance
of a software component. The effect of a failing component can range
from negligible to catastrophic. A component with a high integrity
level needs to be tested more thoroughly than a component with a lower
level. There is, however, no guidance in the requirements that
indicate the relative importance of different areas. Each area is thus
considered equally important. However, one of the main objectives is
to ensure the stability of DNS.

#### Resources summary

TODO: Briefly describe the neessary resources to run a test.

#### Responsibilites

#### Tools, techniques, methods, and metrics

TODO: Briefly described the necesessary input and any metrics in the
output.


Details of the Master Test Plan

The utilization of the IEEE 829-2008 is described in this
chapter. There is also a mapping between the test areas and the
requirements.

### Test processes

The goal of these documents is to describe the test cases and how the
DNS is tested. This is a part of a larger project where the goal is to
test the quality of the Internet. Processes for Management,
Acquisition, Supply, Development, Operation, and Maintenance are not
part of this subproject to define.

### Definition of test levels

There can be different types of tests, e.g. unit, system, and
acceptance tests. This test environment will only focus on compliance
testing for DNS, thus only one test level. Multiple areas have however
been identified within the system requirements:

* Basic
* Delegation
* Consistency
* DNSSEC
* Address
* Name server
* Connectivity
* Zone
* Syntax

The separation of test levels does not necessarily mean that
the levels are separated in the Zonemaster implementation. The
actual test levels might differ from the actual test modules in the
code. At this level, the separation is done to make a better overview
of all the test cases specified.

### Test documentation requirements

The following documents can be created according to the standard:

* Level Test Plan (LTP)
* Level Test Design (LTD)
* Level Test Case (LTC)
* Level Test Procedure (LTPr)

However, the LTD has been incorporated in the LTP and in the LTC. LTPr
has been incorporated in the LTC.

#### Level Test Plan

The system will undergo acceptance testing against the
requirements. Each area is documented in a separate test plan. The
purpose is to map the requirements into test cases and also to
describe the approach for testing this level.

In the title of the plan, the word “Level” is replaced by the name for
the particular level being documented by the plan. E.g. Delegation
Test Plan and DNSSEC Test Plan.

#### Level Test Case

The purpose of the LTC is to define the information needed as it
pertains to inputs to and outputs from the software or software-based
system being tested. The test cases may be documented in a single or
multiple LTC depending on the extent of the area. Any procedures are
included in the documentation.

In the title of the test case, the word “Level” is replaced by the
name for the particular level being documented by the test case. The
documents have sub-titles since there can be more than one document
within one level. E.g. DNSSEC Test Cases or Connectivity Test Cases.

### Test administration requirements

These activities are needed to administer the tests during execution.

#### Anomaly Resolution

The tests are executed with the input given by the user. The input
data is validated to be correct. Depending on the input data and what
is available in the public DNS, some test cases might not be executed.

The output from Zonemaster should clearly indicate what test cases have
been executed, and which have not.

#### Reporting Processes

The output from all the tests are collected by the system and reported
back to the user depending on the choice of the user. There might be
several different methods used, for example as a brief or verbose log
file, or as XML or JSON output, or directly into a database.

### Test reporting requirements

The following documents can be created according to the standard:

 * Level Test Log (LTL)
 * Anomaly Report (AR)
 * Level Interim Test Status Report (LITSR)
 * Level Test Report (LTR)
 * Master Test Report (MTR)

Only an MTR will be generated by the system.

#### Level Test Log

All logs from each test level are aggregated into the Master Test
Report.

#### Anomaly Report

An Anomaly Report is created if the result from the test is not
conclusive due to internal or external anomalies. All anomalies are in
the Master Test Report. However, the software implementation will also
report any anomalies with a different return code, so any calling
software can determine if the test cases were executed as planned, or
if any anomaly stopped the execution prematurely.

#### Master Test Report

The Master Test Report is generated continually during the execution
of the test plan. It will indicate the result of all the test cases,
and depending on any selected verbosity also down to the level where
you can see all the DNS queries and replies in a preferred data
format.

TODO: make a better description of the log files here?

### System requirements

The initial requirements are derived from the current Zonecheck and
DNSCheck documentation and implementations. A basic requirement is to
implement all tests that Zonecheck and DNSCheck currently
implements. However, there is a large overlap between the two
implementations, and also several test cases that are no longer
applicable.

Currently there is no other requirements other than to implement the
test cases from the current implementations.

TODO: do we need a separate requirements document?

#### DNSCheck

These are the current documented test cases from DNSCheck:  
<https://github.com/dotse/dnscheck/wiki/Tests>  
<https://github.com/dotse/dnscheck/wiki/Detailed-list-of-all-possible-dnscheck-messages>

#### Zonecheck

The current implemented tests in Zonecheck
are described in [ExistingZCPolicy.md](
../../internal-documentation/requirements/ExistingZCPolicy.md).

#### RFCs

Where it is possible, the test cases refer to any RFCs describing what
the current IETF standards advise on the implementation of the DNS
protocol.


General

This section contains the glossary and document change procedures for
all of the test plans and test cases.

### Glossary
| Word / Acronym | Explanation                              |
|:---------------|:-----------------------------------------|
| DNS            | Domain Name System                       |
| DNSSEC         | DNS Security Extensions                  |
| RFC            | Requst for Comments, IETF document       |
| MTP            | Master Test Plan                         |
| MTR            | Master Test Report                       |
| LTC            | Level Test Case                          |
| LTL            | Level Test Log                           |
| LTP            | Level Test Plan                          |
| LTR            | Level Test Report                        |
| AR             | Anomaly Report                           |

### Definitions of Terms

Since there are some terms relating to DNS that are commonly used with
unclear or multiple meanings, we will define here exactly what we mean
when we use them in the context of these specifications and these
tests. Any uncommon or special terms we use will also be defined here.

_Child Domain_ is the domain being tested.

_Parent Domain_ is the domain that delegates directly to the domain
being tested. Differently put, it is the domain whose nameservers
delivers the glue records for the child domain.

_Glue Name Records_ are defined as all NS records
pertaining to the child domain that are delivered by the nameservers
for the parent domain.

_Glue Address Records_ are all A or AAAA records
pertaining to the child domain that are delivered by the nameservers
for the parent domain

_In bailiwick_ means that nameservers for a domain is in
the same domain (within the domain). i.e for 'domain.com', nameserver 
is ns.domain.com and not ns.domain.net nor ns.otherdomain.org

_Out of bailiwick_ The term out-of-bailiwick means that nameservers for 
a domain is not in the same domain. ie for 'domain.com' nameserver is 
ns.domain.net or ns.otherdomain.org etc.


### Document change procedures

The overall change procedures are defined by the project and the
change management. However, there are some steps to take into
consideration when changing the test documents.

#### Identifying

A change to the documents may be initiated because of several reasons:

 * New internal or external requirements
 * Problems with the test cases
 * Text that needs to be clarified
 * Etc.

#### Implementing

The document revisioning is managed by a version control system
(Git). Each change must contain a specific commit message detailing
the change. The major revisions section of this document should also
be updated if there is a new release of the document.

It is important that the outcome of the test cases stays the same;
unless the change was based on new or updated requirements.

#### Recording changes

An overall description must be stated in the document control chapter,
including a new revision number. A more detailed description of the
changes is part of the specific commit in the version control system.

#### Approving

The technical review team must approve any changes made to the test
cases.



# List of Address tests

These tests focuses on the Address specific test cases of the DNS tests.

These documents uses the terminology defined in the
[Master Test Plan](#zonemaster-master-test-plan).

## Mapping from Requirements to Test Case

|Req| Description                                                              | Test Case            |
|:--|:-------------------------------------------------------------------------|:---------------------|
|R03| Name server address must be globally routable                            |[ADDRESS01](#address01-name-server-address-must-be-globally-routable)|
|R40| Reverse DNS entry exists for name server IP address                      |[ADDRESS02](#address02-reverse-dns-entry-exists-for-name-server-ip-address)|
|R41| Reverse DNS entry matches name server name                               |[ADDRESS03](#address03-reverse-dns-entry-matches-name-server-name)|
|R04| IPv6 address not part of bogon prefix                                    |[ADDRESS01](#address01-name-server-address-must-be-globally-routable)|



## ADDRESS01: Name server address must be globally routable

### Test case identifier
**ADDRESS01** Name server address must be globally routable

### Objective

In order for the domain and its resources to be accessible, authoritative 
name servers must have addresses in the routable public addressing space.

IANA is responsible for global coordination of the IP addressing system.
Aside its address allocation activities, it maintains reserved address ranges
for special uses. These ranges can be categorized into three types : 
[Special purpose IPv4
addresses](https://www.iana.org/assignments/iana-ipv4-special-registry/iana-ipv4-special-registry.xml),
[Special purpose IPv6
addresses](https://www.iana.org/assignments/iana-ipv6-special-registry/iana-ipv6-special-registry.xml)
and [Multicast reserved
addresses](https://www.iana.org/assignments/multicast-addresses/multicast-addresses.xml).

### Inputs

The domain name to be tested.

### Ordered description of steps to be taken to execute the test case

1. Obtain the IP addresses of each name server of the domain from the parent using
   [Method4](../Methods.md) and child using [Method5](../Methods.md)

2. If any IP address (IPv4 or IPv6) falls within any of the blocks in the below
   mentioned IANA links, the test case fails:
   * <http://www.iana.org/assignments/iana-ipv4-special-registry/iana-ipv4-special-registry.xhtml>
   * <http://www.iana.org/assignments/iana-ipv6-special-registry/iana-ipv6-special-registry.xhtml>

### Outcome(s)

If one name server has one of its addresses matches a forbidden address
block, the test fails. If all the name server addresses are outside these
forbidden blocks, the test case succeeds. 

### Special procedural requirements

The registries listed in bullet 2 above must be fetched prior to testing 

### Intercase dependencies

None.












## ADDRESS02: Reverse DNS entry exists for name server IP address

### Test case identifier
**ADDRESS02** Reverse DNS entry should exist for name server IP address

### Objective

Some anti-spam techniques use reverse DNS lookup to allow incoming traffic.
In order to prevent name servers to be blocked or blacklisted, DNS 
administrators should publish PTR records associated to name server
addresses.

[technical reference to be found]

### Inputs

The domain name to be tested.

### Ordered description of steps to be taken to execute the test case

1. Obtain the glue address records  of the domain checked
   using [Method4](../Methods.md)

2. Obtain the IP addresses of each name server of the domain checked
   using [Method5](../Methods.md)

3. For each IP address, a recursive PTR query must be performed.

4. If any answer of the queries performed in step 3 contains an RCODE
   other than NOERROR or if the answer does not include a PTR record,
   this test case fails.

### Outcome(s)

If the test case succeeds, its result is a list of addresses with corresponding
hostnames which are the result of the PTR queries performed.
The result could be represented as a hash table where the keys are the IP
addresses and the values their corresponding hostnames.

### Special procedural requirements

None.

### Intercase dependencies

The outcomes of this test is used as the input of [ADDRESS03](#address03-reverse-dns-entry-matches-name-server-name) test case.



## ADDRESS03: Reverse DNS entry matches name server name

### Test case identifier
**ADDRESS03** Reverse DNS entry matches name server name

### Objective

Some anti-spam techniques use reverse DNS lookup to allow incoming traffic.
In order to prevent name servers to be blocked or blacklisted, DNS 
administrators should publish PTR records associated with the name server
addresses. 

Moreover, as mentioned in paragraph 2.1 of [RFC
1912](https://tools.ietf.org/html/rfc1912) when a PTR record exists, it must match the host
name.

### Inputs

The domain name to be tested.

### Ordered description of steps to be taken to execute the test case

1. Obtain the IP addresses of each name server of the domain from the child
   using [Method5](../Methods.md).
   These IP addresses can be associated to the name servers through a hash 
   table where each address is a key and the name server it's unique value.
   Let's call this hash table HASH1.

2. Obtain the reverse DNS entries associated to name servers names as described
   in test case [ADDRESS02](#address02-reverse-dns-entry-exists-for-name-server-ip-address). Let's call its outcome HASH2 which
   consists of IP adresses as keys and hostnames as values. As multiple PTR
   records are allowed, an IP address can have several corresponding hostnames.

3. Compare HASH2 to HASH1. 

   Parse the address list of HASH1. 

   For an address (a) of HASH1, take the corresponding hostname (h) in HASH1. 
   If this hostname (h) is present in the hostnames list associated to this
   address (a) in HASH2, then the test succeeds for address (a).

   If the hostname (h) does not match any hostnames associated to address (a)
   in HASH2, then the test fails for address (a).

   If the test fails for one IP address, the whole test case fails.   
   

### Outcome(s)

Multiple addresses and multiple PTR records are allowed. The test 
succeeds if every name server address has one or more PTR records
and one of these records matches the server name.
If one address doesn't match, the whole test case fails.

### Special procedural requirements

None.

### Intercase dependencies

Some of the input of this test comes as the result of test case
[ADDRESS02](#address02-reverse-dns-entry-exists-for-name-server-ip-address). [ADDRESS02](#address02-reverse-dns-entry-exists-for-name-server-ip-address) must succeed
prior to proceed with this test case [ADDRESS03](#address03-reverse-dns-entry-matches-name-server-name).



# List of Basic tests

These are tests of a domain's most basic functionality. If these fail,
it will be hard or impossible to perform any other tests at all. The
test code should be constructed so that these tests are always run, even
if a subset of tests is asked for that would not normally include them.

These documents uses the terminology defined in the Master Test Plan.

## Mapping from Requirements to Test Case

|Req| Description                                                 | Test Case           |
|:--|:------------------------------------------------------------|:--------------------|
|R77|Perform input validation on the domain name                  |[BASIC00](#basic00-domain-name-must-be-valid)|
|R67|The domain must have a parent domain                         |[BASIC01](#basic01-the-domain-must-have-a-parent-domain)|
|R08|The child domain must have at least one working nameserver   |[BASIC02](#basic02-the-domain-must-have-at-least-one-working-name-server)|
|R15|The child domain must have at least one working nameserver   |[BASIC02](#basic02-the-domain-must-have-at-least-one-working-name-server)|
|R68|The child domain must have at least one working nameserver   |[BASIC02](#basic02-the-domain-must-have-at-least-one-working-name-server)|
|R69|The _Broken but functional_ test                             |[BASIC03](#basic03-the-broken-but-functional-test)|



## BASIC00: Domain name must be valid

### Test case identifier
**BASIC00** Domain name must be valid

### Objective

In order to begin testing the domain name from the input must be a valid
domain name. The domain name must either be a 

1. a valid IDN name (Internationalized Domain Name) ([RFC 5890](https://tools.ietf.org/html/rfc5890#page-13), 
section 2.3.2.3), or
2. a valid ASCII domain.

The ASCII domain name is valid if follows the rules defined in section 2.1
of [RFC 1123](https://tools.ietf.org/html/rfc1123#section-2.1), i.e. only
consists of the ASCII characters "a-z", "A-Z", "0-9", "." and "-" with the
extension of the "_" character, standardized for SRV records 
([RFC 2782](https://tools.ietf.org/html/rfc2782)). The "." character is 
the delimiter between labels, and a label must not start or end with a 
"-" character. There are also lenght limitation of the domain names and 
its labels (specified below).

A valid IDN name with non-ASCII code points can always be converted 
to a valid ASCII domain meeting the requirement above.

The objective of this test is to see if it is possible to have the domain name
mapped into a DNS packet in order to proceed with further testing.


### Inputs

The domain name to be tested.

### Ordered description of steps to be taken to execute the test case

1. If the input domain name starts with a "." character or has two or more consecutive 
"." characters the test case fails.
2. Remove any trailing "." character from the input domain name.
3. If the domain name contains non-ASCII characters, try to convert
it to an ASCII domain, without a trailing "." character, with the IDN rules (see above). 
If the conversion fails, then this test case fails.
4. If the domain name does not meet the requirement of permissible characters of
an ASCII domain above, this test case fails.
5. If the total length of the input is more than 253 octets, this test
   case fails.
6. Separate the input by the dividing it into labels separated by the "."
   character.
7. If any of the labels from step 6 has more than 63 octets, this test case fails.


### Outcome(s)

The outcome is PASS or FAIL.

### Special procedural requirements

If this test fails, it's impossible to continue and the whole testing process
is aborted.

### Intercase dependencies

None.



## BASIC01: The domain must have a parent domain

### Test case identifier
**BASIC01** The domain must have a parent domain

### Objective

In order for a domain to work, it must be delegated to from a domain higher
up in the DNS hierarchy (a parent domain). However, note that this
requirement does not concern the root domain.

### Inputs

The label of the domain name to be tested.

### Ordered description of steps to be taken to execute the test case

A recursive NS-record lookup for the child domain name starting at the
root domain should be done, and the steps of the process recorded.

1. If the recursion reaches a name server that responds with a redirect
   directly to the requested domain, including functional glue, the test
   succeeds. The domain through which the name server was found is
   considered the parent domain.
2. If the recursion reaches a name server that authoritatively responds
   with NXDOMAIN for the child domain, the test succeeds. The domain
   through which the name server was found is considered the parent domain.
3. If the recursion reaches a point where the recursion for some reason
   cannot continue before either case 1 or 2 happens, the test fails. 

### Outcome(s)

If the recursive lookup of the domain is successful, this test cases passes.
If the test cannot continue (step 3), this test case fails.

### Special procedural requirements

If this test fails, it's impossible to continue and the whole testing process
is aborted.

### Intercase dependencies

None.



## BASIC02: The domain must have at least one working name server

### Test case identifier
**BASIC02** The domain must have at least one working name server

### Objective

In order for the domain to work, it must have at least one name server that
can answer queries about the domain. 

### Inputs

The label of the domain name to be tested.

### Ordered description of steps to be taken to execute the test case

1. Retrieve the IP addresses from the parent delegation using [Method 4](
   ../Methods.md#method-4-obtain-glue-address-records-from-parent). For name
   server that are out-of-bailiwick, do separate recursive queries to retrieve
   the IP addresses of those names.
2. An NS query for the domain name should be sent to each address.
3. If there are no valid DNS packets containing the NS answer from any
   of the name servers, this test case fails.

### Outcome(s)

If at least one recorded response is a DNS response holding one or more NS
records for the child domain, this test succeeds.

### Special procedural requirements

If this test fails, it's impossible to continue and the whole testing
process (except for the BASIC03 test) is aborted.

### Intercase dependencies

None.



## BASIC03: The _Broken but functional_ test

### Test case identifier
**BASIC03** The _Broken but functional_ test

### Objective

The case where the delegation for a domain is too broken to be fully
tested but functional enough for simple web browsing should be detected.
This test should only be performed if the BASIC02 test has failed, in
order to explain why the domain seemingly works but otherwise is
untestable.

### Inputs

The label of the domain name to be tested.

### Ordered description of steps to be taken to execute the test case

1. Retrieve the IP addresses from the parent delegation using [Method 4](
   ../Methods.md#method-4-obtain-glue-address-records-from-parent). For name
   server that are out-of-bailiwick, do separate recursive queries to retrieve
   the IP addresses of those names.
2. An A query for the child domain name with the label 'www' prepended is
   sent to each address from the input parameters, and the responses
   recorded.
3. If no answer from the above queries contain any A record, this test
   fails.

### Outcome(s)

If at least one recorded response contains at least one A record for the
requested name, this test succeeds.

### Special procedural requirements
This test should only be performed if the BASIC02 test has failed.

### Intercase dependencies

Only perform this test if BASIC02 fails.



# List of Connectivity tests

This document uses the terminology defined in the [Master Test Plan](#zonemaster-master-test-plan).

## Mapping from Requirements to Test Case

|Req| Description                                    | Test Case                         |
|:--|:-----------------------------------------------|:----------------------------------|
|R01|UDP connectivity                                |[CONNECTIVITY01](#connectivity01-udp-connectivity)|
|R02|TCP connectivity                                |[CONNECTIVITY02](#connectivity02-tcp-connectivity)|
|R11|Nameserver addresses on the same subnet         |[CONNECTIVITY03](#connectivity03-as-diversity)|
|R12|Nameserver addresses are all on the same subnet |[CONNECTIVITY03](#connectivity03-as-diversity)|
|R54|Nameservers belong all to the same AS           |[CONNECTIVITY03](#connectivity03-as-diversity)|



## CONNECTIVITY01: UDP connectivity

### Test case identifier

**CONNECTIVITY01:** UDP connectivity

### Objective

DNS queries are sent using UDP on port 53, as described in section 4.2.1 of
[RFC 1035](https://tools.ietf.org/html/rfc1035).

The objective for this test is that all the authoritative name servers for
the domain are accessible over UDP on port 53

### Inputs

The domain to be tested.

### Ordered description of steps to be taken to execute the test case

1. Obtains the IP address of the name servers from [Method4](../Methods.md)
   and [Method5](../Methods.md)
2. A SOA query is sent over UDP to distinct IP addresses of each name server
   found in step 1.
3. If all queries in step 2 receive a DNS answer (bogus responses are not
   checked here) then the test case succeed.

### Outcome(s)

If there is any name server that fails to answer queries over port 53 using
UDP, this test case fails

### Special procedural requirements	

If either IPv4 or IPv6 transport is disabled, ignore the evaluation of the result of any test using this transport protocol. Log a message reporting on the ignored result.

### Intercase dependencies

None



## CONNECTIVITY02: TCP connectivity

### Test case identifier

**CONNECTIVITY02:** TCP connectivity

### Objective

DNS queries are sent using TCP on port 53, as described in section 4.2.2 of
[RFC 1035](https://tools.ietf.org/html/rfc1035).

The objective for this test is that all the authoritative name servers for
the domain are accessible over TCP on port 53

### Inputs

The domain to be tested.

### Ordered description of steps to be taken to execute the test case

1. Obtains the IP addresses of the name servers from [Method4](../Methods.md)
   and [Method5](../Methods.md)
2. A SOA query is sent over TCP to distinct IP address of each name server
   found in step 1.
3. If all queries in step 2 receive a DNS answer (bogus response are not
   checked here) then the test case succeed.

### Outcome(s)

If there is any name server that fails to answer queries over port 53 using
TCP, this test case fails

### Special procedural requirements     

If either IPv4 or IPv6 transport is disabled, ignore the evaluation of the result of any test using this transport protocol. Log a message reporting on the ignored result.

### Intercase dependencies

None



## CONNECTIVITY03: AS Diversity

### Test case identifier

**CONNECTIVITY03:** AS Diversity

### Objective

[RFC 2182](https://tools.ietf.org/html/rfc2182), section 3.1
clearly specifies that distinct authoritative name servers for a child
domain should be placed in different topological and geographical locations.
The objective is to minimise the likelihood of a single failure disabling
all of them. 

The objective in this test is to check that all IP addresses of the domain's
authoritative name servers does not belong to the same AS.

[missing references to AS numbers, RFC 1930?]

### Inputs

The domain name to be tested.

### Ordered description of steps to be taken to execute the test case

1. Obtain the IP addresses of the name servers from [Method4](../Methods.md).
2. Obtain the list of ASN lookup domains from the configuration of Zonemaster.
3. For obtaining the AS numbers for IPv6 addresses; first reverse its eight
4-character hexadecimal numbers and place dots between each. It is important 
all omitted zeroes are included.  
3.1. At the end of the reversed IPv6 address, concatenate the string (from
step 2)  
3.2 Send a "TXT" query using the string (obtained from Step 3.1)  
3.3 If there is an ANSWER, then go to step 3.4, else go to the next string
in the list (from step 2)  
3.4 The AS number for the IPv6 address is found in the ANSWER for the query 
4. To obtain the AS numbers for IPv4 addresses; first reverse the four numerical
octets and place dots between each.  
4.1. At the end of the reversed IPv4 address concatenate the string (from step 2)  
4.2 Send a "TXT" query using the string (obtained from Step 4.1)  
4.3 If there is an ANSWER, go to step 4.4, else go to the next string
in the list (from step 2)  
4.4 The AS number for the IPv4 address is found in the ANSWER for the query 
5. If all the retrieved AS (obtained from step 3.3 and 4.3) are same, then the test
   fails.

### Outcome(s)

If there is a AS which is different from the other retrieved AS, then the
test succeeds.

### Special procedural requirements

None

### Intercase dependencies

None



# List of Consistency tests

This document uses the terminology defined in the [Master Test Plan](#zonemaster-master-test-plan).

## Mapping from Requirements to Test Case

|Req| Description                                                  | Test Case                       |
|:--|:-------------------------------------------------------------|:--------------------------------|
|R33|SOA serial number consistency                                 |[CONSISTENCY01](#consistency01-soa-serial-number-consistency)|
|R34|RNAME consistency                                             |[CONSISTENCY02](#consistency02-rname-consistency)|
|R36|Coherence of SOA with primary nameserver                      |[CONSISTENCY03](#consistency03-soa-parameters-consistency)|
|R70|Coherence of all other SOA-fields where SOA Serial is the same|[CONSISTENCY03](#consistency03-soa-parameters-consistency)|
|R78|All authoritative nameservers reply with same set             |[CONSISTENCY04](#consistency04-name-server-ns-consistency)|
|R83|Consistency between glue and authoritative data               |[CONSISTENCY05](#consistency05-consistency-between-glue-and-authoritative-data)|



## CONSISTENCY01: SOA serial number consistency

### Test case identifier

**CONSISTENCY01:** SOA serial number consistency

### Objective

For the data served by the authoritative name servers for a designated zone
to be consistent, all authoritative name servers must serve the same SOA
record for the designated zone.   

If the serial number (explained in 3.3.13. of [RFC 1035](https://tools.ietf.org/html/rfc1035)) 
, which is part of the SOA record, is not consistent between authoritative servers, 
there is a possibility that the data served is inconsistent. The reasons for this 
inconsistency may be different - such as misconfiguration, or as a result of slow 
propagation to the secondary name servers.

The objective of this test is to verify that the serial number is consistent
between different authoritative name servers.

For reference purposes : [RFC1982](https://tools.ietf.org/html/rfc1982) 
explains the serial number arithmetic, and section 4.3.5 of 
[RFC 1034](https://tools.ietf.org/html/rfc1035) explains the importance of
serial number consistency.

### Inputs

The domain name to be tested.

### Ordered description of steps to be taken to execute the test case

 1. Obtain the list of name servers from [Method4] and [Method5].
 2. Retrieve the SOA RR from all the name servers.
 3. If the SOA serial number is not the same from all the answers received
    from step 2, then:
     1. Check if the difference is minor (An integer should be added to
        define what is the minor value).
     2. If the difference is greater than the minor value, then the test
        case fails.
     3. If the difference is less than or equal to the minor value,
        then the test is passed.

### Outcome(s)

All authoritative name servers must have consistent serial numbers. If the
test does not find any inconsistency, then the test case passes.

### Special procedural requirements	

If either IPv4 or IPv6 transport is disabled, ignore the evaluation of the
result of any test using this transport protocol. Log a message reporting
on the ignored result.

A manual inspection of the SOA serial may be needed to determine if the zone
updates work properly or not, and if the serial values are within a
reasonable range, then the test is OK.

### Intercase dependencies

None

[Method4]: ../Methods.md#method-4-obtain-glue-address-records-from-parent
[Method5]: ../Methods.md#method-5-obtain-the-name-server-address-records-from-child


## CONSISTENCY02: RNAME consistency

### Test case identifier

**CONSISTENCY02:** RNAME consistency

### Objective

All authoritative name servers must serve the same SOA record (section
4.2.1) of [RFC 1034](https://tools.ietf.org/html/rfc1034) for the
tested domain. As per section 3.3.13 of [RFC 1035](https://tools.ietf.org/html/rfc1035),
the RNAME field in the SOA RDATA refers to the administrative contact. The inconsistency in
the administrative contact for the a domain might result in operational
failures being informed to different persons.

The objective of this test is to verify that the administrative contact is
consistent between different authoritative name servers.

### Inputs

1. The domain name to be tested

### Ordered description of steps to be taken to execute the test case

1. Obtain the list of name servers from [Method4](../Methods.md) and
   [Method5](../Methods.md).
2. Retrieve the SOA RR from all the name servers. 
3. If the SOA RNAME field is not the same from all the answers
   received from step 2, then the test case fails.

### Outcome(s)
All authoritative name servers must have consistent RNAME field.
If the test does not find any inconsistency, then the test succeeds.

### Special procedural requirements	

If either IPv4 or IPv6 transport is disabled, ignore the evaluation of the
result of any test using this transport protocol. Log a message reporting
on the ignored result.

### Intercase dependencies

None



## CONSISTENCY03: SOA parameters consistency

### Test case identifier

**CONSISTENCY03:** SOA parameters consistency

### Objective

All authoritative name servers must serve the same SOA record for the
designated domain. As per section 3.3.13 of [RFC 1035](https://tools.ietf.org/html/rfc1035),
the field "REFRESH" in the SOA RDATA refers to the 32 bit time interval before the
zone should be refereshed. The field "RETRY" refers to the 32 bit interval
before a failed refresh should be retried, the field "EXPIRE" refers to a 32
bit time value that specifies the upper limit on the time interval that can
elapse before the zone is no longer authoritative and the field "MINIMUM" is
the unsigned 32 bit minimum TTL field that should be exported with any
resource record from the domain's zone

The inconsistency in these different fields for the designated zone (*Got to
Verify*) might result in operational inconsistencies.

### Inputs

The domain name to be tested.

### Ordered description of steps to be taken to execute the test case

1. Obtain the list of name servers from [Method4](../Methods.md) and
   [Method5](../Methods.md).
2. Retrieve the SOA RR from all the name servers. 
3. If the SOA RNAME field is not the same from all the answers
   received from step 2, then the test case fails.

### Outcome(s)

All authoritative name servers must have consistent RNAME field.
If the test does not find any inconsistency, then the test succeeds.

### Special procedural requirements	

If either IPv4 or IPv6 transport is disabled, ignore the evaluation of the
result of any test using this transport protocol. Log a message reporting
on the ignored result.

### Intercase dependencies



## CONSISTENCY04: Name server NS consistency

### Test case identifier

**CONSISTENCY04:** Name server NS consistency

### Objective

All authoritative name servers must serve the same NS record set
(section 4.2.2) of [RFC 1034](https://tools.ietf.org/html/rfc1034)
for the tested domain. Any inconsistency of NS records descibed in
section 3.3.11 of [RFC 1035](https://tools.ietf.org/html/rfc1035)
might result in operational failures.

The objective of this test is to verify that the NS records are
consistent between all the authoritative name servers.

### Inputs

1. The domain name to be tested

### Ordered description of steps to be taken to execute the test case

1. Obtain the list of name servers from [Method2](../Methods.md) and
   [Method3](../Methods.md).
2. Retrieve the NS RR set from all the name servers. 
3. If the NS RR set is not give the same answer from all the name
   servers, this test case fails.

### Outcome(s)

If not all the designated authoritative name servers answer with the
same NS RR set, this test case fails.

### Special procedural requirements	

If either IPv4 or IPv6 transport is disabled, ignore the evaluation of the
result of any test using this transport protocol. Log a message reporting
on the ignored result.

### Intercase dependencies

None



## CONSISTENCY05: Consistency between glue and authoritative data

### Test case identifier

**CONSISTENCY05:** Consistency between glue and authoritative data

### Objective

For name servers that have IP addresses listed as glue, the IP addresses must
match the authoritative A and AAAA records for that host. This is an IANA
requirement (https://www.iana.org/help/nameserver-requirements).

The objective of this test is to verify that the glue records are
consistent between glue and authoritative date.

### Inputs

1. The domain name to be tested

### Ordered description of steps to be taken to execute the test case

1. Obtain the list of address records from [Method4](../Methods.md) and
   [Method5](../Methods.md).
2. If the set of address records are not consistent between the glue address
   records and the name server address records from the child, this test case fails.

### Outcome(s)

If there is no consistency between the glue and the name server address records
from the child, this test case fails.

### Special procedural requirements	

If either IPv4 or IPv6 transport is disabled, ignore the evaluation of the
result of any test using this transport protocol. Log a message reporting
on the ignored result.

### Intercase dependencies

None



# List of Delegation tests

This document uses the terminology defined in the [Master Test Plan](#zonemaster-master-test-plan).

## Mapping from Requirements to Test Case

|Req| Description                                          | Test Case                     |
|:--|:-----------------------------------------------------|:------------------------------|
|R09|Minimum number of name servers                        |[DELEGATION01](#delegation01-minimum-number-of-name-servers)|
|R10|Name servers must have distinct IP addresses          |[DELEGATION02](#delegation02-name-servers-must-have-distinct-ip-addresses)|
|R13|No truncation of referrals                            |[DELEGATION03](#delegation03-no-truncation-of-referrals)|
|R14|No truncation of referrals                            |[DELEGATION03](#delegation03-no-truncation-of-referrals)|
|R16|Name server is authoritative                          |[DELEGATION04](#delegation04-name-server-is-authoritative)|
|R18|NS RR does not point to CNAME alias                   |[DELEGATION05](#delegation05-ns-rr-does-not-point-to-cname-alias)|
|R20|Existence of SOA                                      |[DELEGATION06](#delegation06-existence-of-soa)|
|R21|Test whether the ANSWER for SOA is authoritative      |[DELEGATION06](#delegation06-existence-of-soa)|
|R71|Parent glue name records present in child             |[DELEGATION07](#delegation07-parent-glue-name-records-present-in-child)|



## DELEGATION01: Minimum number of name servers   

### Test case identifier

**DELEGATION01:** Minimum number of name servers

### Objective

Section 4.1 of [RFC 1034](https://tools.ietf.org/html/rfc1034) specifies that
there must be at least minimum two name servers for a domain. This test is
done to verify this condition

### Inputs

The domain name to be tested.

### Ordered description of steps to be taken to execute the test case

1. Obtain the complete set of name servers from parent using
   [Method2](../Methods.md).
2. If the number of name servers (distinct NS records) returned in previous step is less than two, the
   record as an error.
3. Obtain the complete set of name servers from the child 
   using [Method3](../Methods.md).
4. If the number of name servers (distinct NS records) returned in the previous step is less than two, the
   record as an error.
5. If an error was recorded in step 2 or step 4, then the test case fails.
 
### Outcome(s)

If the total amount of name servers used for the domain are two or more,
then the test case succeeds.

### Special procedural requirements

None 

### Intercase dependencies

None



## DELEGATION02: Name servers must have distinct IP addresses

### Test case identifier

**DELEGATION02:** Name servers must have distinct IP addresses

### Objective

If the domain have several different name server names used, they can all
be using the same IP address. This may be due to a configuration error, or
a workaround to a certain policy restriction. This test case checks that
the name servers used does not resolve to reuse the same IP addresses.

Section 4.1 of [RFC 1034](https://tools.ietf.org/html/rfc1034) says at least
to name servers must be used for a delegation.

### Inputs

The domain name to be tested.

### Ordered description of steps to be taken to execute the test case

1. Obtain the IP addresss of the name servers from the parent using [Method
4](../Methods.md#method-4-obtain-glue-address-records-from-parent) and the child using
   [Method 5](../Methods.md#method-5-obtain-the-name-server-address-records-from-child).
2. If any of the IP addresses resolved in step 1 is not unique, then this
   test case fails.

### Outcome(s)

If all the IP addresses used by the name servers for the domain are unique,
then the test succeeds.

### Special procedural requirements

None 

### Intercase dependencies

None



## DELEGATION03: No truncation of referrals

### Test case identifier

**DELEGATION03:** No truncation of referrals

### Objective

The Domain Name System defaults to using UDP for queries and answers with a
DNS payload limit of 512 bytes. Larger replies cause an initial truncation
indication leading to a subsequent handling via TCP with substantially
higher overhead. EDNS0 is used to allow for larger UDP responses thus
reducing the need for use of TCP.

But [IANA](https://www.iana.org/help/nameserver-requirements) still
maintains that referrals from the parent zone name servers must fit into
a non-EDNS0 UDP DNS packet.

In this test, the authoritative and additional section of the referral
response from the domain must fit into a 512 byte UDP packet.

### Inputs

The domain name to be tested.

### Ordered description of steps to be taken to execute the test case

1. Obtains the IP addresss of the name servers from the parent using
   [Method4](../Methods.md) and the child using [Method5](../Methods.md).
2. Create a DNS packet holding a query for a maximally long name in the relevant
   zone (that is, 255 octets including label separators).
3. Add all unique NS records for the zone obtained from step1 to the Authority section.
4. If there is at least one in-zone NS that has an IPv4 address, take the
   one with the shortest name and add an A record for it to the Additional
   section.
5. If there is at least one in-zone NS that has an IPv6 address, take the
   one with the shortest name and add an AAAA record for it to the Additional
   section.
6. If the DNS packet after encoding is more than 512 octets then the test
   fails.

### Outcome(s)

If the created packet fits into 512 octet, then the test succeeds.

### Special procedural requirements

None

### Intercase dependencies

None



## DELEGATION04: Name server is authoritative

### Test case identifier

**DELEGATION04:** Name server is authoritative

### Objective

Subsection 6.1 of [RFC 2181](https://tools.ietf.org/html/rfc2181) specifies
that the nameservers must answer authoritatively for the domain. Answers
to queries to the name servers for the designated zone must have the "AA"
bit set.

### Inputs

The domain name to be tested.

### Ordered description of steps to be taken to execute the test case

1. Obtain the complete set of name server address records from the parent using
   [Method4](../Methods.md) and the child using [Method5](../Methods.md).
2. All the uniquely obtained address records are queried for the SOA record 
   over TCP and UDP on port 53.
3. For each query in step 2, check whether DNS answer (bogus response are not
   checked here) is obtained. If any of the query fails to respond with an
   answer, then do not proceed to step 4 for that query. Exit from the test
   without any exceptions.
4. If any name server fail to give an authoritative answer ("AA-bit" is set
   in the answer), the test fails.

### Outcome(s)

If all the name servers answer with the AA-bit set, then the test succeeds.

### Special procedural requirements

If either IPv4 or IPv6 transport is disabled, ignore the evaluation of the
result of any test using this transport protocol. Log a message reporting
on the ignored result.

### Intercase dependencies

None



## DELEGATION05: NS RR does not point to CNAME alias

### Test case identifier

**DELEGATION05:** NS RR does not point to CNAME alias 

### Objective

[RFC 1912](https://tools.ietf.org/html/rfc1912) mentions that NS records
pointing to CNAME is forbidden. 

The objective of this test is to verify that name servers does not point to
a CNAME record.

### Inputs

The domain name to be tested.

### Ordered description of steps to be taken to execute the test case

1. Obtain the complete set of name server address records from the parent using
   [Method4](../Methods.md) and the child using [Method5](../Methods.md).
2. All the uniquely obtained address records are queried for A and AAAA records.
3. If any of the name server queried responded with the resource record type
   CNAME, then this test case fails.

### Outcome(s)

If none of the response contains the resource record type CNAME then the
test succeeds.

### Special procedural requirements

None

### Intercase dependencies

None



## DELEGATION06: Existence of SOA

### Test case identifier

**DELEGATION06:** Existence of SOA

### Objective

Section 6.1 of the [RFC 2181](https://tools.ietf.org/html/rfc2181) specifies
that the SOA record is mandatory for every zone. 

This test is intended to verify the prescence of a SOA record for the
domain.

### Inputs

The domain name to be tested.

### Ordered description of steps to be taken to execute the test case

1. Obtain the complete set of name server address records from the parent using
   [Method4](../Methods.md) and the child using [Method5](../Methods.md).
2. All the uniquely obtained address records are queried for the SOA record.
3. If there is an answer with NOERROR and there is no content in the
   answer section, this test case fails.

### Outcome(s)

If there is a SOA record present for the domain this test case succeeds.

### Special procedural requirements

If either IPv4 or IPv6 transport is disabled, ignore the evaluation of the
result of any test using this transport protocol. Log a message reporting
on the ignored result.

### Intercase dependencies

None



## DELEGATION07: Parent glue name records present in child

### Test case identifier

**DELEGATION07:** Parent glue name records present in child

### Objective

If the list of name servers for a domain obtained from its parent are not
found in its its child zone, then it leads to an inconsistency (section 2.3
of [RIPE-114](https://www.ripe.net/publications/docs/ripe-114))

### Inputs

The domain name to be tested.

### Ordered description of steps to be taken to execute the test case

1. Obtain the complete set of name servers from the parent using
   [Method2](../Methods.md) and the child using [Method3](../Methods.md).
3. If the set of NS names obtained from [Method2](../Methods.md) are 
   not found in [Method3](../Methods.md), then the test fails.

### Outcome(s)

If the set of glue name records obtained are found in the list of name
servers obtained from the child also, then the test succeeds

### Special procedural requirements

None

### Intercase dependencies

None



# List of DNSSEC tests

These are the DNSSEC tests for a domain.

This document uses the terminology defined in the
[Master Test Plan](#zonemaster-master-test-plan).

## Mapping from Requirements to Test Case

|Req| Description                                                 | Test Case |
|:--|:------------------------------------------------------------|:----------|
|R58|Legal values for the DS hash digest algorithm                |[DNSSEC01](#dnssec01-legal-values-for-the-ds-hash-digest-algorithm)|
|R59|DS must match a DNSKEY in the designated zone                |[DNSSEC02](#dnssec02-ds-must-match-a-dnskey-in-the-designated-zone)|
|R60|Check for too many NSEC3 iterations                          |[DNSSEC03](#dnssec03-check-for-too-many-nsec3-iterations)|
|R61|Check for too short or too long RRSIG lifetimes              |[DNSSEC04](#dnssec04-check-for-too-short-or-too-long-rrsig-lifetimes)|
|R62|Check for invalid DNSKEY algorithms                          |[DNSSEC05](#dnssec05-check-for-invalid-dnskey-algorithms)|
|R63|Verify DNSSEC additional processing                          |[DNSSEC06](#dnssec06-verify-dnssec-additional-processing)|
|R64|If there exists DNSKEY at child, the parent should have a DS |[DNSSEC07](#dnssec07-if-dnskey-at-child-parent-should-have-ds)|
|R65|RRSIG(DNSKEY) must be valid and created by a valid DNSKEY    |[DNSSEC08](#dnssec08-rrsigdnskey-must-be-valid-and-created-by-a-valid-dnskey)|
|R66|RRSIG(SOA) must be valid and created by a valid DNSKEY       |[DNSSEC09](#dnssec09-rrsigsoa-must-be-valid-and-created-by-a-valid-dnskey)|
|R76|Zone contains NSEC or NSEC3 records                          |[DNSSEC10](#dnssec10-zone-contains-nsec-or-nsec3-records)|
|R79|If DS at parent, child zone must be signed                   |[DNSSEC11](#dnssec11-delegation-from-parent-to-child-is-properly-signed)|
|R84|Test for DNSSEC Algorithm Completeness (DS->DNSKEY->RRSIG)   |[DNSSEC12](dnssec12.md)|

## Default DNS query flags for all DNSSEC tests

* Transport: UDP
* Bufsize: EDNS0 buffer size (512)
* Flags -- query flags
    * do -- DNSSEC ok (1)
    * cd -- Checking Disabled (1)
    * rd -- Recursion Desired (0)
    * ad -- Authenticated Data (0)

See section 3.2 of [RFC 4035](https://tools.ietf.org/html/rfc4035#section-3.2)
for a description of the flags used by a recursive name server.

## Key, hash and signature algorithms

There are many algorithms defined for doing DNSSEC, not all of them are
mandatory to implement. This test case should strive not only to implement
all mandatory algorithms, but also most of those that are in use on the
internet today as well.

If any algorithm in a DNSSEC record type is not recognized by the test
system, the test system should emit a notice about this.



## DNSSEC01: Legal values for the DS hash digest algorithm

### Test case identifier
**DNSSEC01** Legal values for the DS hash digest algorithm

### Objective

The allowed Digest Algorithms in a DS record published by the parent are
published by IANA in [Delegation Signer (DS) Resource Record (RR) Type
Digest Algorithms](https://www.iana.org/assignments/ds-rr-types/ds-rr-types.xml).
No other DS Digest Algorithm values other than those allocated by IANA
should be published in DNS.

The use of the DS RR type is described in section 2.4 of
[RFC 4035](https://tools.ietf.org/html/rfc4035#section-2.4), and the exact
definition of the DS RR type is in
[RFC3658](https://tools.ietf.org/html/rfc3658).

### Inputs

The domain name to be tested.

### Ordered description of steps to be taken to execute the test case

1. Retrieve the DS RR set from the parent zone.
2. From the DS RRs, extract the Digest type values.
3. If any value from the Digest type is not included in the IANA table
   (currently values 1 to 4 are valid), this test case fails.

### Outcome(s)

If any of the Digest type values from the DS RR set published in the parent
zone are not assigned by IANA, this test case fails.

### Special procedural requirements

Test case is only performed if DS records are found.

### Intercase dependencies

None.



## DNSSEC02: DS must match a DNSKEY in the designated zone

### Test case identifier
**DNSSEC02** DS must match a DNSKEY in the designated zone

### Objective

DNS delegations from a parent to a child are secured with DNSSEC by
publishing one or several Delgation Signer (DS) records in the parent
zone, along with the NS records for the delegation. For the secure
delegation to work, the DS record must match at least one DNSKEY record
in the child zone.

The method for authentication a DNS response is described in section 5 of
[RFC 4035](https://tools.ietf.org/html/rfc4035#section-5). The DS record
is described in section 5 of [RFC 4034](
https://tools.ietf.org/html/rfc4034#section-5) and the DNSKEY record is
described in section 2 of [RFC 4034](
https://tools.ietf.org/html/rfc4034#section-2).

The IANA registry of DNSKEY algorithm numbers is in the [dns-sec-alg-numbers](
https://www.iana.org/assignments/dns-sec-alg-numbers/dns-sec-alg-numbers.xml).
The allowed Digest Algorithms in a DS record published by the parent are
published by IANA in [Delegation Signer (DS) Resource Record (RR) Type
Digest Algorithms](https://www.iana.org/assignments/ds-rr-types/ds-rr-types.xml). 

The Key Tag is only an indicator for a resolver or application to enable
a quicker matching of the keys. This is however not a reliable method for
identifiying keys. A description of this is found in section 5.2 of
[RFC 4035](https://tools.ietf.org/html/rfc4035#section-5.2).

Section 3 of [RFC 4509](https://tools.ietf.org/html/rfc4509#section-3) states
that Validator implementations SHOULD ignore DS RRs containing SHA-1 digests
if DS RRs with SHA-256 digests are present in the DS RRset. The algorithms
are tested separately.

### Inputs

The domain name to be tested.

### Ordered description of steps to be taken to execute the test case

1. Retrieve the DS RR set from the parent zone. If there are no DS RR
   present, exit the test
2. Retrieve the DNSKEY RR set from the child zone. If there are no
   DNSKEY RR present, then the test case fails
3. If no Key Tag from the DS RR matches any Key Tag from the DNSKEY RR,
   this test case fails.
4. Match all DS RR with type digest algorithm “2” with DNSKEY RR from the
   child. If no DS RRs with algorithm 2 matches a DNSKEY RR from the child,
   this test case fails.
5. Match all DS RR with type digest algorithm “1” with DNSKEY RR from the
   child. If no DS RRs with algorithm 1 matches a DNSKEY RR from the child,
   this test case fails.

### Outcome(s)

If none of the DS RR from the parent zone matches any DNSKEY RR from the
child zone, this test case fails.

### Special procedural requirements

See the [level document](README.md) about DNSSEC algorithms.

Test case is only performed if DS records are found.

### Intercase dependencies

None.



## DNSSEC03: Check for too many NSEC3 iterations

### Test case identifier
**DNSSEC03** Check for too many NSEC3 iterations

### Objective

For an authoritative name server an increased number of NSEC3 iterations
have a negative impact on performance.

Section 10.3 in [RFC 5155](https://tools.ietf.org/html/rfc5155#section-10.3)
sets a maximum number of iterations depending on the DNSSEC key size -
regardless of which algorithm is used.

> A zone owner MUST NOT use a value higher than shown in the table
> below for iterations for the given key size.  A resolver MAY treat a
> response with a higher value as insecure, after the validator has
> verified that the signature over the NSEC3 RR is correct.

|Key Size |Iterations |
|:--------|:----------|
|1024     |150        |
|2048     |500        |
|4096     |2,500      |

Section 5.3.2 in [RFC 6781](https://tools.ietf.org/html/rfc6781#section-5.3.2)
describes the consequences for an authoritative name server in more detail, and
references the [NSEC Hash Performance](http://www.nlnetlabs.nl/downloads/publications/nsec3_hash_performance.pdf)
study from NLNet Labs.

> Choosing a value of 100 iterations is deemed to be a
> sufficiently costly, yet not excessive, value: In the worst-case
> scenario, the performance of name servers would be halved, regardless
> of key size.

### Inputs

The domain name to be tested.

### Ordered description of steps to be taken to execute the test case

1. Query the NSEC3PARAM RR from the child zone.
2. If there is not use of NSEC3 there is no NSEC3PARAM RR in the child zone,
   and this test case ends here.
3. The iterations value is extracted from the NSEC3PARAM RR.
4. If the number of iterations is higher than 100, this test case emits
   at least a warning.
5. Query the DNSKEY RR, and extract the smallest key from the zone.
6. Depending on the key sizes listed in section 10.3 of RFC 5155, if the
   number of iterations is larger than the corresponding key size of
   the smallest key, this test case fails.

### Outcome(s)

If the NSEC3 iterations value is higher than 100, this test case gives
a warning. If it is higher than the number recommended for the corresponding
key size, this test case fails.

### Special procedural requirements

This test is only fully performed if the zone uses NSEC3 (has the
NSEC3PARAM RR in the zone).

### Intercase dependencies

None.



## DNSSEC04: Check for too short or too long RRSIG lifetimes

### Test case identifier
**DNSSEC04** Check for too short or too long RRSIG lifetimes

### Objective

Having RRSIG signature lifetimes last for too long opens up for DNS replay
attacks. Having too short RRSIG signature lifetimes is likely to have
a major operational impact if the master name server is down for that long.

There is no clear recommendation of the exact validity periods to use with
DNSSEC. Shorter validity than 12 hours until expiration will give a serious
operational problem just in case of temporary network problems, and longer
than 180 days will create wide open holes for replay attacks.

The considerations are described in [RFC6781](
https://tools.ietf.org/html/rfc6781).

### Inputs

The domain name to be tested.

### Ordered description of steps to be taken to execute the test case

1. Retrieve the DNSKEY RR set from the child zone, including RRSIG.
2. Retrieve the SOA RR set from the child zone, including RRSIG.
3. If any RRSIG validity is found where the expiration time already has
   passed, this test case fails.
4. If any RRSIG validity time is shorter than 12 hours (from "now"),
   this test case fails.
5. If any RRSIG validity time is longer than 180 days (from "now"), this
   test fails.
6. If any RRSIG validity from inception to expiration is longer than 180
   days, this test case fails.

### Outcome(s)

If any of the signature expirations time is either shorter than 12 hours or
longer than 180 days, this test case fails.

### Special procedural requirements

Test case is only performed if RRSIG RRs are found in the answers.

### Intercase dependencies

None.



## DNSSEC05: Check for invalid DNSKEY algorithms

### Test case identifier
**DNSSEC05** Check for invalid DNSKEY algorithms

### Objective

The domain should only use DNSKEY algorithms that are defined by IANA.

The DNSKEY record is described in section 2 of [RFC 4034](
https://tools.ietf.org/html/rfc4034#section-2).

The IANA registry of DNSKEY algorithm numbers is in the [dns-sec-alg-numbers](
https://www.iana.org/assignments/dns-sec-alg-numbers/dns-sec-alg-numbers.xml).

### Inputs

The domain name to be tested.

### Ordered description of steps to be taken to execute the test case

1. Retrieve the DNSKEY RR set from the child zone.
2. The DNSKEY algorithm numbers are derived from all the DNSKEY RRs.
3. The algorithm numbers are matched with the IANA DNSKEY algorithm table.
4. If any the algorithm numbers is unassigned, reserved, a private algorithm
   or deprecated, this test case fails.

### Outcome(s)

If any DNSKEY algorithm number is unassigned, reserved, a private algorithm
or deprecated, this test case fails.

### Special procedural requirements

See the [level document](README.md) about DNSSEC algorithms.

Test case is only performed if DNSKEY records are found.

### Intercase dependencies

None.



## DNSSEC06: Verify DNSSEC additional processing

### Test case identifier
**DNSSEC06** Verify DNSSEC additional processing

### Objective

In order for an authoritative name server to be DNSSEC compliant,
it must serve DNSSEC signatures (RRSIG) as additional data in a DNS answer.
This additional processing is described in section 3.1 of [RFC 4035](
https://tools.ietf.org/html/rfc4035#section-3.1).

### Inputs

The domain name to be tested.

### Ordered description of steps to be taken to execute the test case

1. For each name server configured for the domain:
2. Retrieve the DNSKEY RR set from the child zone.
3. If the answer from the query does contain a DNSKEY _and_ RRSIG, this
   test case passes.
4. If there is no DNSKEY RR or RRSIG RR in the answer and the RCODE is
   NOERROR, this test case fails.

### Outcome(s)

If any of the name servers configured for the domains fail to answer with
DNSSEC data, this test case fails.

### Special procedural requirements

None.

### Intercase dependencies

This test should only run if [DNSSEC07](#dnssec07-if-dnskey-at-child-parent-should-have-ds) has been successful
in finding a DNSKEY for the domain.



## DNSSEC07: If DNSKEY at child, parent should have DS

### Test case identifier
**DNSSEC07** If DNSKEY at child, parent should have DS

### Objective

If the child zone have a DNSKEY published, the intent may be to have a
secure chain up to the root. If there is no DS record published at the
parent zone, this might be a configuration error.

The method for authentication a DNS response is described in section 5 of
[RFC 4035](https://tools.ietf.org/html/rfc4035#section-5). The DS record
is described in section 5 of [RFC 4034](
https://tools.ietf.org/html/rfc4034#section-5) and the DNSKEY record is
described in section 2 of [RFC 4034](
https://tools.ietf.org/html/rfc4034#section-2).

### Inputs

The domain name to be tested.

### Ordered description of steps to be taken to execute the test case

1. Retrieve the DNSKEY RR set from the child zone.
2. Retrieve the DS RR set from the parent zone.
3. Issue a warning if there is a DNSKEY in the child zone and no DS in the parent zone.

### Outcome(s)

A warning is issued there is a DNSKEY present in the child zone, and there
is no DS record present in the parent zone.

### Special procedural requirements

None.

### Intercase dependencies

None.



## DNSSEC08: RRSIG(DNSKEY) must be valid and created by a valid DNSKEY

### Test case identifier
**DNSSEC08** RRSIG(DNSKEY) must be valid and created by a valid DNSKEY

### Objective

The apex DNSKEY RRset should be signed with an RRSIG with a DNSKEY from
the RRset. This is described in section 2.4 of [RFC 4035](https://tools.ietf.org/html/rfc4035#section-2.4).

(In reality the RRSIG should be created by a DNSKEY matching a DS. All
algorithms from the DS should have a matching DNSKEY with those algorithms,
and all DNSKEY algorithms should have matching RRSIG with those algorithms.
Postponed for future tests. See future tests in the requirements document.)

### Inputs

The domain name to be tested.

### Ordered description of steps to be taken to execute the test case

1. Retrieve the DNSKEY RR set from the child zone.
2. Retrieve the RRSIG from the answer.
3. Match the RRSIGs with the DNSKEY RR set, and check the inception and
   expiration times and compare them with the current time.
4. If any of the RRSIGs validates the DNSKEY RR set, and the RRSIG is
   within the validity period this test case pass.
5. If none of the RRSIGs does not validate the DNSKEY RR set, this test
   case fails.

### Outcome(s)

If any RRSIG validates the DNSKEY RR set, this test case pass.

### Special procedural requirements

None.

### Intercase dependencies

None.



## DNSSEC09: RRSIG(SOA) must be valid and created by a valid DNSKEY

### Test case identifier
**DNSSEC09** RRSIG(SOA) must be valid and created by a valid DNSKEY

### Objective

If the zone is signed, the SOA RR should be signed with a valid RRSIG 
using a DNSKEY from the DNSKEY RR set. This is use signatures isdescribed
in section 2.2 of
[RFC 4035](https://tools.ietf.org/html/rfc4035#section-2.2).

(In reality the RRSIG should be created by the DNSKEY matching the DS. All
algorithms from the DS should have a matching DNSKEY with those algorithms,
and all DNSKEY algorithms should have matching RRSIG with those algorithms.
Postponed for future tests. See future tests in the requirements document.)

### Inputs

The domain name to be tested.

### Ordered description of steps to be taken to execute the test case

1. Retrieve the SOA RR set from the child zone.
2. Retrieve the RRSIGs from the answer.
3. Match the RRSIGs with the SOA RR, and check the inception and
   expiration times and compare them with the current time.
4. If the RRSIGs validates the SOA RR, and the RRSIG is within the
   validity period this test case pass.
5. If any of the RRSIGs does not validate the SOA RR, this test
   case fails.

### Outcome(s)

If all RRSIG validates the SOA RR, this test case pass.

### Special procedural requirements

None.

### Intercase dependencies

None.



## DNSSEC10: Zone contains NSEC or NSEC3 records

### Test case identifier
**DNSSEC10** Zone contains NSEC or NSEC3 records

### Objective

Using DNSSEC, having NSEC or NSEC3 records provides a secure denial of
existence for records that is not present in the zone. This test case
verifies that correct NSEC or NSEC3 records with valid signatures are
returned for a query for an non-existent name, and that they cover the
queried name.

The use of the NSEC RR type is described in section 3.1.3 of
[RFC 4035](https://tools.ietf.org/html/rfc4035#section-3.1.3), and
the description of the NSEC RR itself is in section 4 of
[RFC 4034](https://tools.ietf.org/html/rfc4034#section-4).

The description of the NSEC3 RR is in section 3 of
[RFC 5155](https://tools.ietf.org/html/rfc5155#section-3), and its
use in the DNS response is described in section 7.2 of
[RFC 5155](https://tools.ietf.org/html/rfc5155#section-7.2).

### Inputs

The domain name to be tested.

### Ordered description of steps to be taken to execute the test case

1. A query is made asking for the A RR with the qname xx--example.[domain].
2. If the answer does not have RCODE NOERROR or NXDOMAIN, the test ends.
3. If the answer does not contain an NSEC or NSEC3 RR in the Authority section, this test case fails.
4. The NSEC or NSEC3 RR returned must cover the qname, if they do not, this test case fails.
5. The NSEC or NSEC3 RRs must have valid RRSIGs. Match against DNSKEY and check that the RRSIG is within the validity period.
6. If the RRSIG(s) over the NSEC or NSEC3 RRs does not validate, this test case fails.

### Outcome(s)

If the answer contains NSEC or NSEC3 records that covers the qname, and the RRs
also have valid RRSIGs, this test case passes.

### Special procedural requirements

None.

### Intercase dependencies

None.



## DNSSEC11: Delegation from parent to child is properly signed

### Test case identifier
**DNSSEC11** Delegation from parent to child is properly signed

### Objective

The delegation step from the parent zone to the child zone is vitally
important. Securing this step with DNSSEC involves several separate
steps. Most of these individual steps are tested in other tests
(specifically [DNSSEC02](#dnssec02-ds-must-match-a-dnskey-in-the-designated-zone), [DNSSEC06](#dnssec06-verify-dnssec-additional-processing),
[DNSSEC07](#dnssec07-if-dnskey-at-child-parent-should-have-ds) and [DNSSEC08](#dnssec08-rrsigdnskey-must-be-valid-and-created-by-a-valid-dnskey)). This test
adds a check that the DNSKEY signing the apex DNSKEY RRset is the one
that has a matching DS record at the parent, and verifies the delegation
step as a whole.

Section 5 in [RFC 4035](https://tools.ietf.org/html/rfc4035) describes
how a resolver authenticates DNS responses with DNSSEC.

### Inputs

The domain name to be tested.

### Ordered description of steps to be taken to execute the test case

1. The DS RRset for the zone is fetched from the parent.
2. If no DS record is found, the test fails.
3. The apex DNSKEY RRset is fetched from the zone.
4. If no apex DNSKEY is found, the test fails.
5. If no RRSIG records are included with the DNSKEY RRset, the test fails.
6. If no DS record matching a DNSKEY record can be found, the test fails.
7. If no RRSIG records were made with a DNSKEY matching a DS, the test fails.
8. If the relevant RRSIG records do not contain a valid signature of the apex
   DNSKEY RRset using the given DNSKEY record, or if they are outside of
   their validity period, the test fails.
9. Otherwise, that is if there is a DS record that matches a DNSKEY record
   that correctly signs the apex DNSKEY RRset, the test succeeds.

### Outcome(s)

If there is a DS record that matches a DNSKEY record that correctly signs the
apex DNSKEY RRset, the test case passes.

### Special procedural requirements

None.

### Intercase dependencies

None.



## DNSSEC12: Test for DNSSEC Algorithm Completeness

### Test case identifier
**DNSSEC12** Test for DNSSEC Algorithm Completeness

### Objective

The objectives for this Test Case has yet to be defined. This is a
placeholder for a complete defintion of the Test Case. The Test Case
is not yet implemented.

Test for DNSSEC Algorithm Completeness (DS->DNSKEY->RRSIG)

See issues [#588], [#528], [#529] and [#231].

[#588]: https://github.com/dotse/zonemaster/issues/588
[#528]: https://github.com/dotse/zonemaster/issues/528
[#529]: https://github.com/dotse/zonemaster/issues/529
[#231]: https://github.com/dotse/zonemaster/issues/231


### Inputs

TBD.

### Ordered description of steps to be taken to execute the test case

TBD.

### Outcome(s)

TBD.

### Special procedural requirements

TBD.

### Intercase dependencies

TBD.


Copyright (c) 2018, IIS (The Internet Foundation in Sweden)  
Copyright (c) 2018, AFNIC  

# List of Name Server tests

These are tests of the properties of a name server.

These documents use the terminology defined in the
[Master Test Plan](#zonemaster-master-test-plan).

## Mapping from Requirements to Test Case

|Req| Description                              | Test Case                     |
|:--|:-----------------------------------------|:------------------------------|
|R42|A name server should not be a recursor    |[NAMESERVER01](#nameserver01-a-name-server-should-not-be-a-recursor)|
|R43|nameserver doesn't allow recursion        |[NAMESERVER01](#nameserver01-a-name-server-should-not-be-a-recursor)|
|R46|test if server is recursive               |[NAMESERVER01](#nameserver01-a-name-server-should-not-be-a-recursor)|
|R72|Test of EDNS0 support                     |[NAMESERVER02](#nameserver02-test-of-edns0-support)|
|R73|Test availability of zone transfer (AXFR) |[NAMESERVER03](#nameserver03-test-availability-of-zone-transfer-axfr)|
|R74|Same source address                       |[NAMESERVER04](#nameserver04-same-source-address)|
|R53|behaviour against AAAA query              |[NAMESERVER05](#nameserver05-behaviour-against-aaaa-query)|
|R19|NS can be resolved                        |[NAMESERVER06](#nameserver06-ns-can-be-resolved)|
|R81|Test upward referral                      |[NAMESERVER07](#nameserver07--to-check-whether-authoritative-name-servers-return-an-upward-referral)|
|R82|Test QNAME case insensitivity             |[NAMESERVER08](#nameserver08-testing-qname-case-insensitivity)|
|R80|Test QNAME case sensitivity               |[NAMESERVER09](#nameserver09-testing-qname-case-sensitivity)|



## NAMESERVER01: A name server should not be a recursor

### Test case identifier
**NAMESERVER01** A name server should not be a recursor

### Objective

To ensure consistency in DNS, an authoritative name server should not be
configured to do recursive lookups. Also, open recursive resolvers are
considered bad internet practice due to their capability of assisting in
large scale DDoS attacks. The introduction to [RFC 5358](
https://tools.ietf.org/html/rfc5358) elaborates on mixing recursor and
authoritative functionality, and the issue is further elaborated by
[D.J. Bernstein](http://cr.yp.to/djbdns/separation.html).

Section 2.5 of [RFC 2870](https://tools.ietf.org/html/rfc2870) have very
specific requirement on disabling recursion functionality on root name
servers.

### Inputs

The domain name to be tested.

### Ordered description of steps to be taken to execute the test case
1. Retrieve all address records for all the name servers using [Method
   4](../Methods.md) and [Method 5](../Methods.md).
2. A SOA query for an almost certainly nonexistent name sent to the each
   name server IP address found in step 1, with the flag Recursion Desired 
   (RD) set.
3. If any answer of the queries made in step 2 contains an RCODE with
   NXDOMAIN, this test case fails.

### Outcome(s)

If the response is a possible answer with the RCODE NXDOMAIN, this test
case fails.

### Special procedural requirements

None.

### Intercase dependencies

None.



## NAMESERVER02: Test of EDNS0 support

### Test case identifier
**NAMESERVER02** Test of EDNS0 support

### Objective

EDNS(0) is a mechanism to announce capabilities of a DNS implementation,
and is now basically required by any new functionality in DNS such as
DNSSEC.
Initially standardized in [RFC 2671](https://tools.ietf.org/search/rfc2671)
and later updated by [RFC 6891](https://tools.ietf.org/search/rfc6891),
EDNS(0) is a mechanism to announce capabilities of a DNS implementation.
This test case checks that all name servers has the capability to do
EDNS(0).

Servers not implementing EDNS(0) returns FORMERR:

> Responders that choose not to implement the protocol extensions
> defined in this document MUST respond with a return code (RCODE) of
> FORMERR to messages containing an OPT record in the additional
> section and MUST NOT include an OPT record in the response.

### Inputs

The domain name to be tested.

### Ordered description of steps to be taken to execute the test case

1. Retrieve all address records for all the name servers using
   [Method 4](../Methods.md#method-4-obtain-glue-address-records-from-parent) and
   [Method 5](../Methods.md#method-5-obtain-the-name-server-address-records-from-child),
   and do recursive lookups for the name servers that are out of bailiwick.
2. Send a DNS query to each name server IP address querying the SOA record
   of the domain name with EDNS0 option of payload size ("bufsize")
   set to 512.
3. If any answer from step 2 contains a FORMERR RCODE this test case fails.
4. If the answer does not contain an OPT RR with EDNS version 0, this test
   case fails.

### Outcome(s)

If any name server returns FORMERR for a query using EDNS(0), or if there is
no OPT RR with EDNS version 0 in it, this test case fails.

### Special procedural requirements

None.

### Intercase dependencies

None.



## NAMESERVER03: Test availability of zone transfer (AXFR)

### Test case identifier
**NAMESERVER03** Test availability of zone transfer (AXFR)

### Objective

AXFR is a mechanism to transfer the whole content of a zone from a name
server. Some people prefer to not disclose the whole content of a zone
for various reasons, and thus wants the public name server infrastructure
not do disclose the whole zone content to the public. This test case
checks the availability of the AXFR mechanism.

AXFR is defined in its latest revision in
[RFC 5936](https://tools.ietf.org/html/rfc5936).

### Inputs

The domain name to be tested.

### Ordered description of steps to be taken to execute the test case
1. Retrieve all address records for all the name servers using [Method 
   4](../Methods.md) and [Method 5](../Methods.md).
2. Send an AXFR query to each name server IP address found in step 1.
3. If any answer to the AXFR query is starting with the SOA record
   for the domain, this test case fails.

### Outcome(s)

If any name server for the domain allows a zone transfer using AXFR,
this test case fails.

### Special procedural requirements

None.

### Intercase dependencies

None.



## NAMESERVER04: Same source address

### Test case identifier
**NAMESERVER04** Same source address

### Objective

Responses from the authoritative name servers must contain same source IP
address as the destination IP address of the initial query. This has been
clarified in section 4 of
[RFC 2181](https://tools.ietf.org/html/rfc2181#section-4).

### Inputs

The domain name to be tested.

### Ordered description of steps to be taken to execute the test case
1. Retrieve all address records for all the name servers using [Method 
   4](../Methods.md) and [Method 5](../Methods.md).
2. A SOA query for the domain name sent to the each name server IP address 
   found in step 1.
3. Any answer received from the SOA query must come from the same source IP address
   as the query was sent to. If there is a mismatch, this test case fails.

### Outcome(s)

If any response comes from another IP address than the query was sent to,
this test case fails.

### Special procedural requirements

If there are many authoritative DNS nodes behind the IP adress the query
is sent to, there could be multiple answers with possibly different source
addresses for the query. This special case is currently ignored.

### Intercase dependencies

None.



## NAMESERVER05: Behaviour against AAAA query

### Test case identifier
**NAMESERVER02** Behaviour against AAAA query

### Objective

Older implementations of authoritative name servers have shown different
misbehaviours trying to answer queries for AAAA records, as described in
[RFC 4074](https://tools.ietf.org/html/rfc4074). This test case is intended
to find out if the name server authoritative for the domain shows any of
these behaviours.

### Inputs

The domain name to be tested.

### Ordered description of steps to be taken to execute the test case

1. Retrieve all address records for all the name servers using
   [Method 4](../Methods.md#method-4-obtain-glue-address-records-from-parent) and
   [Method 5](../Methods.md#method-5-obtain-the-name-server-address-records-from-child),
   and do recursive lookups for the name servers that are out of bailiwick.
2. Send a DNS query to each name server IP address querying the AAAA record
   of the domain name.
3. If all of the answers displays the correct behaviour of either returning
   an AAAA record in the answer section and the RCODE NOERROR, or if the
   RCODE is NOERROR and the answer section is empty (as detailed in section 3,
   "Expected behaviour" of RFC 4074), this test case passes and there is no
   need for further execution of the test case.
4. If there is no answer from any of the name servers (the query is "dropped"),
   as described in section 4.1 of RFC 4074, this test case fails.
5. As described in section 4.2 and 4.3 of RFC 4074, if the answer has the
   RCODE 3 "Name Error", RCODE 4 "Not Implemented" or RCODE 2 "Server Failure"
   or RCODE 1 "Format Error", this test case fails.
6. If the answer contains an RDATA with 4 bytes this indicates a broken
   response as described in section 4.4 of RFC 4074, this test case fails.

### Outcome(s)

If there is any problem answering the AAAA query, this test case fails.

### Special procedural requirements

If either IPv4 or IPv6 transport is disabled, ignore the evaluation of
the result of any test using this transport protocol. Log a message
reporting on the ignored result.

### Intercase dependencies

None.



## NAMESERVER06: NS can be resolved

### Test case identifier
**NAMESERVER06** NS can be resolved

### Objective

All name servers names listed for a delegation must be resolvable in DNS.
If they are not resolvable using DNS this is a sign of misconfiguration,
and raises the risk of unreachability for the domain. It could also lower
the performance for any resolver trying to resolve the name.

The objective of this test is to resolve the domain using all the listed
name servers used in the delegation. More information about resolver
behavior is in section 7 of [RFC 1035](https://tools.ietf.org/html/rfc1035).

### Inputs

The domain name to be tested.

### Ordered description of steps to be taken to execute the test case

1. Obtain the list of name servers for the domain using [Method 2](
   ../Methods.md#method-2-obtain-glue-name-records-from-parent) and [Method 3](
   ../Methods.md#method-3-obtain-name-servers-from-child).
2. Use [Method 4](
   ../Methods.md#method-4-obtain-glue-address-records-from-parent) and
   [Method 5](
   ../Methods.md#method-5-obtain-the-name-server-address-records-from-child)
   to resolve all the name server names obtained in step 1.
3. If any name does not resolve to either an A RR or AAAA RR, this test
   case fails.

### Outcome(s)

If any of the name server names fails to resolve to an IP address, this
test case fails.

### Special procedural requirements

If either IPv4 or IPv6 transport is disabled, ignore the evaluation of
the result of any test using this transport protocol. Log a message
reporting on the ignored result.

### Intercase dependencies

None.



## NAMESERVER07:  To check whether authoritative name servers return an upward referral

### Test case identifier
NAMESERVER07 To check whether authoritative name servers return an upward
referral


### Objective
The configuration and/or implementation of some authoritative name servers
causes them to return an upward referral to the root zone. There are proofs that
such a [behaviour could be used for DDoS attacks](
https://www.dns-oarc.net/oarc/articles/upward-referrals-considered-harmful)


### Inputs
The domain name to be tested.

### Ordered description of steps to be taken to execute the test case
1. If the input domain to be tested is the root, exit from the test.
2. Retrieve all address records for all the name servers using [Method 
   4](../Methods.md) and [Method 5](../Methods.md).
3. An NS query is sent to each name server IP address found in step 2,
   with the root “.” as the destination 
4. If any of the query returns with one or more responses in the
   authority section, then this test case fails.

### Outcome(s)
The test case is Ok only if there are no responses in the authority section 

### Special procedural requirements
None.

### Intercase dependencies
None.


Foundation) Copyright (c) 2013, 2014, 2015, AFNIC Creative Commons Attribution
4.0 International License

## NAMESERVER08: Testing QNAME case insensitivity  

### Test case identifier
NAMESERVER08 Verify whether the authoritative nameserver response match the 
case of every letter in the query name


### Objective
The DNS standards require that nameservers treat names with case insensitivity.
That is, the names example.com and EXAMPLE.COM should resolve to the same IP
address. However, in the response, most nameservers echo back the name as it
appeared in the request, preserving the original case.

Therefore, another way to add entropy to requests is to randomly vary the case
of letters in domain names queried. This technique, also known as "0x20" because
bit 0x20 is used to set the case of of US-ASCII letters, was first proposed in
the [IETF internet draft](https://tools.ietf.org/html/draft-vixie-dnsext-dns0x20-00) Use of Bit 0x20 in DNS Labels to Improve Transaction
Identity. With this technique, the nameserver response must match not only the
query name, but the case of every letter in the name string; for example,
wWw.eXaMpLe.CoM or WwW.ExamPLe.COm. This may add little or no entropy to queries
for the top-level and root domains, but it's effective for most hostnames.

### Inputs
The domain name to be tested.

### Ordered description of steps to be taken to execute the test case
1. Retrieve all address records for all the name servers using [Method 
   4](../Methods.md) and [Method 5](../Methods.md).
2. A random query with mixed case (e.G Www.iETf.Org) is sent to each unique name
   server IP address found in step 1.
3. Remember the case of the QNAME in the query sent.
4. Compare the QNAME in the question section of the response with the string in    step3. 
5. If the string in step3 and step4 are not equal with respect to case in
   sensitivity, the test fails.


### Outcome(s)
The test case is Ok only if there are no responses in the authority section 

### Special procedural requirements
None.

### Intercase dependencies
None.


Foundation) Copyright (c) 2013, 2014, 2015, AFNIC Creative Commons Attribution
4.0 International License

## NAMESERVER09: Testing QNAME case sensitivity

### Test case identifier
NAMESERVER09 Verify whether the authoritative nameserver returns same results
for equivalent names with different cases in the request.


### Objective
There has been cases where the nameservers respond with complete
case-sensitivity (in violation of the DNS standards): that is, they match the
exact case of the name in the response; but return different results for
equivalent names with different cases in the request (typically NXDOMAIN). 


### Inputs
The domain name to be tested.

### Ordered description of steps to be taken to execute the test case
1. Retrieve all address records for all the name servers using [Method 
   4](../Methods.md) and [Method 5](../Methods.md).
2. Send a query with the input string in a mixed case (e.g. wWW.iETF.oRG) to
   each of the name server IP address found in step 1. 
3. If the "answer" flag is greater than 0, remember the "answer" section, else
   remember the status flag. 
4. Send another query with an alternative mixed case (e.g. Www.Ietf.Org) to each
   of the name server found in step 1.
5. If the "answer" flag is greater than 0, remember the "answer" section, else
   remember the status flag. 
6. Compare the results remembered in step3 and step5.
7. If the results in step 6 are not equal, the test case fails.

### Outcome(s)
The test case passes only if the results of all queries are exactly the same. 

### Special procedural requirements
None.

### Intercase dependencies
None.


Foundation) Copyright (c) 2013, 2014, 2015, AFNIC Creative Commons Attribution
4.0 International License

# List of Syntax tests

These are tests of the syntax of different labels in DNS, such as domain
names and host names.

This document uses the terminology defined in the
[Master Test Plan](#zonemaster-master-test-plan).

## Mapping from Requirements to Test Case

|Req| Description                                                              | Test Case |
|:--|:-------------------------------------------------------------------------|:----------|
|R05|There must be no illegal symbols in the domain name                       |[SYNTAX01](#syntax01-no-illegal-characters-in-the-domain-name)|
|R06|There must be no dash ('-') at the start or befinning of the domain name  |[SYNTAX02](#syntax02-no-hyphen---at-the-start-or-end-of-the-domain-name)|
|R07|There must be no double dash ('--') in position 3 and 4 of the domain name|[SYNTAX03](#syntax03-there-must-be-no-double-hyphen----in-position-3-and-4-of-the-domain-name)|
|R17|The NS name must have a valid domain/hostname                             |[SYNTAX04](#syntax04-the-ns-name-must-have-a-valid-domainhostname)|
|R22|There must be no misused '@' character in the SOA RNAME field             |[SYNTAX05](#syntax05-misuse-of--character-in-the-soa-rname-field)|
|R23|There must be no illegal characters in the SOA RNAME field                |[SYNTAX06](#syntax06-no-illegal-characters-in-the-soa-rname-field)|
|R24|There must be no illegal characters in the SOA MNAME field                |[SYNTAX07](#syntax07-no-illegal-characters-in-the-soa-mname-field)|
|R49|The MX name must have a valid domain/hostname                             |[SYNTAX08](#syntax08-mx-name-must-have-a-valid-hostname)|



## SYNTAX01: No illegal characters in the domain name

### Test case identifier
**SYNTAX01** No illegal characters in the domain name

### Objective

There must be no illegal characters used in the domain name.
The domain name must follow the rules defined in section 2.3.1 of
[RFC 1035](https://tools.ietf.org/rfc/rfc1035.txt),
section 2.1 of [RFC 1123](https://tools.ietf.org/html/rfc1123#section-2.1),
section 11 of
[RFC 2182](https://tools.ietf.org/html/rfc2181#section-11) and section 2 of
[RFC 3696](https://tools.ietf.org/html/rfc3696#section-2).

### Inputs

The domain name to be tested.

### Ordered description of steps to be taken to execute the test case

1. The domain name of the test object is used as the input for the
   validation.
2. Check for characters that are not allowed in the domain name according
   to the rules defined in section 2.3.1 of
   [RFC 1035](https://tools.ietf.org/rfc/rfc1035.txt).

### Outcome(s)

If there are any invalid characters in the domain name, this test case fails.

### Special procedural requirements

None.

### Intercase dependencies

None.



## SYNTAX02: No hyphen ('-') at the start or end of the domain name

### Test case identifier
**SYNTAX02** No hyphen ('-') at the start or end of the domain name

### Objective

There must be no hyphen ('-') at the start or end of the domain name.
The domain name must follow the rules defined in section 2.3.1 of [RFC 1035](https://tools.ietf.org/rfc/rfc1035.txt),
section 2.1 of [RFC 1123](https://tools.ietf.org/html/rfc1123#section-2.1), section 11 of
[RFC 2182](https://tools.ietf.org/html/rfc2181#section-11) and section 2 of
[RFC 3696](https://tools.ietf.org/html/rfc3696#section-2).

### Inputs

The domain name to be tested.

### Ordered description of steps to be taken to execute the test case

1. Each label of the domain name of the test object is used as the input for the validation.
2. If any label in the domain name start with a hyphen ('-') this test case fails.
3. If any label in the domain name ends with a hyphen ('-') this test case fails.

### Outcome(s)

If any label in the domain name start or ends with a hyphen ('-') this test case fails.

### Special procedural requirements

None.

### Intercase dependencies

None.



## SYNTAX03: There must be no double hyphen ('--') in position 3 and 4 of the domain name

### Test case identifier
**SYNTAX02** No double hyphen ('--') in position 3 and 4 of the domain name

### Objective

There must be no double hyphen ('--') in position 3 and 4 of the domain name,
unless the domain name has the prefix 'xn--' which is used for
internationalization.
See section 5 of [RFC 3696](https://tools.ietf.org/html/rfc3696#section-5),
"Implications of internationalization".


### Inputs

The domain name to be tested.

### Ordered description of steps to be taken to execute the test case

1. Each label of the domain name of the test object is used as the input
   for the validation.
2. If any label in the domain name contains hyphens ('-') in position 3 and 4,
   go to next step.
3. Unless the prefix is 'xn', this test case fails.

### Outcome(s)

If any label in the domain name has a hyphen in position 3 and 4 of the label
and the prefix is not 'xn', this test case fails.

### Special procedural requirements

None.

### Intercase dependencies

None.



## SYNTAX04: The NS name must have a valid domain/hostname

### Test case identifier
**SYNTAX04** The NS name must have a valid domain/hostname

### Objective

The Name Server name must be a valid hostname according to the rules defined
in [RFC 952](https://tools.ietf.org/html/rfc952),
in section 2.1 in [RFC 1123](https://tools.ietf.org/html/rfc1123#section-2.1),
section 11 in [RFC 2182](https://tools.ietf.org/html/rfc2181#section-11) and
section 2 and 5 in [RFC 3696](https://tools.ietf.org/html/rfc3696#section-2).
Newer RFCs may override some rules defined in earlier documents.

### Inputs

The hostname to be tested. The hostnames comes from all the nameservers
used, from both the parent and the zone itself.

### Ordered description of steps to be taken to execute the test case

1. Obtain the list of name server hostnames from [Method2](../Methods.md) and
   [Method3](../Methods.md)
   (This is all the name servers from the parent delegation, and all the
   name servers in the apex of the zone itself.)
2. Each label of the hostname of the test object is used as the input
   for the validation.
3. If any label in the hostname does not contain a-z or 0-9 this test case
   fails.
4. If the rightmost label (the TLD) contains only digits, this test case
   fails.
5. If there is a hyphen ('-') in position 3 and 4 of the label, and the prefix
   is not xn (used for internationalization), this test case fails.

### Outcome(s)

If any of the steps 3 to 5 in the ordered description of this test case fails,
the whole test case fails.

### Special procedural requirements

None.

### Intercase dependencies

None.



## SYNTAX05: Misuse of '@' character in the SOA RNAME field

### Test case identifier
**SYNTAX05** There must be no misused '@' character in the SOA RNAME field

### Objective

The SOA RNAME field does not allow the '@' characters to be used for
describing a mailbox. The first dot ('.') is thus translated into the
'@' character. This is a common mistake. The rules are defined in
[RFC 1035](https://tools.ietf.org/rfc/rfc1035.txt).

### Inputs

The domain name to be tested.

### Ordered description of steps to be taken to execute the test case

1. Retrieve the SOA record from the zone being tested.
2. If there is any '@' character in the RNAME field, this test case fails.

### Outcome(s)

If there is any '@' character in the RNAME field, this test case fails.

### Special procedural requirements

None.

### Intercase dependencies

The de-escaped output from this test is used by [SYNTAX08](#syntax08-mx-name-must-have-a-valid-hostname).



## SYNTAX06: No illegal characters in the SOA RNAME field

### Test case identifier
**SYNTAX06** There must be no illegal characters in the SOA RNAME field

### Objective

The SOA RNAME field is a mailbox address. The SOA RNAME field is defined
in section 3.3 of [RFC 1034](https://tools.ietf.org/rfc/rfc1034.txt) and
section 2.2 of [RFC 1912](https://tools.ietf.org/rfc/rfc1912.txt). The RNAME
field should follow the rules of an e-mail address also defined in section
3.4.1 of [RFC 2822](https://tools.ietf.org/html/rfc2822#section-3.4).

### Inputs

The domain name to be tested.

### Ordered description of steps to be taken to execute the test case

1. Retrieve the SOA record from the zone being tested.
2. Get the RNAME from the SOA record.
3. Convert the first non-escaped "." to an "@" in the RNAME.
4. De-escape the RNAME, converting a "\." to ".".
5. Verify the result from step 3 and 4 according to the Addr-spec
   specification in RFC 2822 section 3.4.1. If this verification fails,
   this test case failes.

### Outcome(s)

If the RNAME field does not validate according to the RFC 2822 specification,
this test case fails.

### Special procedural requirements

None.

### Intercase dependencies

None.



## SYNTAX07: No illegal characters in the SOA MNAME field

### Test case identifier
**SYNTAX07** There must be no illegal characters in the SOA MNAME field

### Objective

The SOA MNAME field is a hostname. Hostnames are valid according to the
rules defined in [RFC 952](https://tools.ietf.org/html/rfc952),
in section 2.1 in [RFC 1123](https://tools.ietf.org/html/rfc1123#section-2.1),
section 11 in [RFC 2182](https://tools.ietf.org/html/rfc2181#section-11) and
section 2 and 5 in [RFC 3696](https://tools.ietf.org/html/rfc3696#section-2).
Newer RFCs may override some rules defined in earlier documents.

### Inputs

The domain name to be tested.

### Ordered description of steps to be taken to execute the test case

1. Retrieve the SOA record from the zone being tested.
2. Get the MNAME from the SOA record.
3. Each label of the hostname of the test object is used as the input
   for the validation.
4. If any label in the hostname does not contain a-z or 0-9 this test case
   fails.
5. If any label of the hostname is longer than 63 characters, this test case
   fails.
6. If the hostname is longer than 255 characters including separators, this
   test case fails.
7. If the rightmost label (the TLD) contains only digits, this test case
   fails.
8. If there is a hyphen ('-') in position 3 and 4 of the label, and the prefix
   is not xn (used for internationalization), this test case fails.

### Outcome(s)

If any of the steps 4 to 8 in the ordered description of this test case fails,
the whole test case fails.

### Special procedural requirements

None.

### Intercase dependencies

This test case uses the same host name validator as test case [SYNTAX04](#syntax04-the-ns-name-must-have-a-valid-domainhostname).



## SYNTAX08: MX name must have a valid hostname

### Test case identifier
**SYNTAX08** The MX record name must be a valid hostname

### Objective

The MX record names used for delivering mail for a domain name address
must be valid hostnames according to the rules defined in
[RFC 952](https://tools.ietf.org/html/rfc952),
in section 2.1 in [RFC 1123](https://tools.ietf.org/html/rfc1123#section-2.1),
section 11 in [RFC 2182](https://tools.ietf.org/html/rfc2181#section-11) and
section 2 and 5 in [RFC 3696](https://tools.ietf.org/html/rfc3696#section-2).
Newer RFCs may override some rules defined in earlier documents. The MX
records use of "Domain Names" is described in section 2.3.5  of
[RFC 5321](https://tools.ietf.org/html/rfc5321#section-2.3.5).

### Inputs

The hostnames to be tested. The hostnames comes from looking up the MX record
for the domain being tested.

### Ordered description of steps to be taken to execute the test case

1. Query for the MX record of the domain name.
2. For each hostname of the MX records found:
3. If any label in the hostname does not contain a-z or 0-9 this test case
   fails.
4. If any label of the hostname is longer than 63 characters, this test case
   fails.
5. If the hostname is longer than 255 characters including separators, this
   test case fails.
6. If the rightmost label (the TLD) contains only digits, this test case
   fails.
7. If there is a hyphen ('-') in position 3 and 4 of the label, and the prefix
   is not xn (used for internationalization), this test case fails.

### Outcome(s)

If any of the steps 3 to 7 in the ordered description of this test case fails,
the whole test case fails.

### Special procedural requirements

None.

### Intercase dependencies

None.



# List of Zone tests

These are tests of the zone content in DNS, such as SOA and
MX records.

This document uses the terminology defined in the
[Master Test Plan](#zonemaster-master-test-plan).

## Mapping from Requirements to Test Case

|Req| Description                                                              | Test Case |
|:--|:-------------------------------------------------------------------------|:----------|
|R25|Fully qualified master nameserver in SOA                                  |[ZONE01](#zone01-fully-qualified-master-nameserver-in-soa)|
|R26|SOA 'refresh' at least 6 hours                                            |[ZONE02](#zone02-soa-refresh-minimum-value)|
|R27|SOA 'retry' lower than 'refresh'                                          |[ZONE03](#zone03-soa-retry-lower-than-refresh)|
|R28|SOA 'retry' at least 1 hour                                               |[ZONE04](#zone04-soa-retry-at-least-1-hour)|
|R29|SOA 'expire' at least 7 days                                              |[ZONE05](#zone05-soa-expire-minimum-value)|
|R31|SOA 'minimum' less than 1 day                                             |[ZONE06](#zone06-soa-minimum-maximum-value)|
|R32|SOA master is not an alias                                                |[ZONE07](#zone07-soa-master-is-not-an-alias)|
|R50|MX is not an alias                                                        |[ZONE08](#zone08-mx-is-not-an-alias)|
|R47|MX record present                                                         |[ZONE09](#zone09-mx-record-present)|
|R52|MX can be resolved                                                        |[ZONE09](#zone09-mx-record-present)|



## ZONE01: Fully qualified master nameserver in SOA

### Test case identifier
**ZONE01** Fully qualified master nameserver in SOA

### Objective

The SOA MNAME record must be a fully qualified master nameserver.
Hostnames are valid according to the
rules defined in [RFC 952](https://tools.ietf.org/html/rfc952),
section 3.3.13 in [RFC 1035](https://tools.ietf.org/html/rfc1035)
and section 11 in [RFC 2181](https://tools.ietf.org/html/rfc2181#section-11).
The hostname of the MNAME field may not be listed among the delegated
name servers, but should still be authoritative for the zone. MNAME may
be used for other services such as DNS NOTIFY described in
[RFC 1996](https://tools.ietf.org/html/rfc1996).

### Inputs

The domain name to be tested.

### Ordered description of steps to be taken to execute the test case

1. Retrieve the SOA record from a delegated name server for the domain.
2. If the answer from step 1 is not authoritative, iterate step 1 until there is an authoritative answer.
3. If the SOA MNAME field does not exist in DNS, this text case fails.
4. If the IP addresses for the SOA MNAME field does not answer DNS queries
   this test case fails.
5. If the SOA MNAME field is not authoritative for the zone tested,
   this test case fails.
6. If the SOA MNAME field is not part of the NS set for the zone, this
   test case may yield a notice message.

### Outcome(s)

If the SOA MNAME field is not an authoritative DNS server for the domain name,
this test case fails.

### Special procedural requirements

None.

### Intercase dependencies

The syntax of the SOA MNAME field is tested in [SYNTAX07](../Syntax-TP/#syntax07-no-illegal-characters-in-the-soa-mname-field).



## ZONE02: SOA 'refresh' minimum value

### Test case identifier
**ZONE02** SOA 'refresh' minimum value

### Objective

The SOA refresh value is the number of seconds that describes
how often a secondary name server will poll the primary name server
to see if there is any updates. The SOA refresh value is described
in section 3.3.13 in [RFC 1035](https://tools.ietf.org/html/rfc1035),
and clarified in section 2.2 of
[RFC 1912](https://tools.ietf.org/html/rfc1912).
Setting the refresh value low will increase the DNS traffic between
the servers, and also increase the load on the master name server.
The primary name server will in most cases send DNS notifications to
tell the secondary name servers that zone content has been updated,
as described in [RFC 1996](https://tools.ietf.org/html/rfc1996).

The [RIPE-203](https://www.ripe.net/publications/docs/ripe-203) recommendation
for the refresh value is 24 hours (86400 seconds). Older DNSCheck code
had a four hour minimum value, and this is the minimum value we
recommend.

### Inputs

The domain name to be tested.

### Ordered description of steps to be taken to execute the test case

1. Retrieve the SOA record from a delegated name server for the domain.
2. If the answer from step 1 is not authoritative, iterate step 1 until there is an authoritative answer.
3. Retrieve the refresh value from the SOA record.
4. If the refresh value is less than 14400 (four hours in seconds)
   this test case fails.

### Outcome(s)

If the SOA refresh value is less than 14400 this test case fails.

### Special procedural requirements

None.

### Intercase dependencies

None.



## ZONE03: SOA 'retry' lower than 'refresh'

### Test case identifier
**ZONE03** SOA 'retry' lower than 'refresh'

### Objective

The SOA retry value is the number of seconds that describes
minimum time elapsed since a failed zone refresh from the primary
name server. The SOA refresh value is described
in section 3.3.13 in [RFC 1035](https://tools.ietf.org/html/rfc1035),
and clarified in section 2.2 of
[RFC 1912](https://tools.ietf.org/html/rfc1912).

> It's typically some fraction of the refresh interval.

Setting the retry value low will increase the DNS traffic between
the servers, and also increase the load on the master name server.

### Inputs

The domain name to be tested.

### Ordered description of steps to be taken to execute the test case

1. Retrieve the SOA record from a delegated name server for the domain.
2. If the answer from step 1 is not authoritative, iterate step 1 until there is an authoritative answer.
3. Retrieve the retry value from the SOA record.
4. If the retry value is higher than or equal to the refresh value,
   this test case fails.

### Outcome(s)

If the SOA retry value is higher than or equal to the refresh value,
this test case fails.

### Special procedural requirements

None.

### Intercase dependencies

None.



## ZONE04: SOA 'retry' at least 1 hour

### Test case identifier
**ZONE04** SOA 'retry' at least 1 hour

### Objective

The SOA retry value is the number of seconds that describes
minimum time elapsed since a failed zone refresh from the primary
name server. The SOA refresh value is described
in section 3.3.13 in [RFC 1035](https://tools.ietf.org/html/rfc1035),
and clarified in section 2.2 of
[RFC 1912](https://tools.ietf.org/html/rfc1912).

Setting the retry value low will increase the DNS traffic between
the servers, and also increase the load on the master name server.

The [RIPE-203](https://www.ripe.net/publications/docs/ripe-203) recommendation
for the retry value is 2 hours (7200 seconds). Older DNSCheck code
had a one hour minimum value (3600 seconds), and this is the minimum
value we recommend.

### Inputs

The domain name to be tested.

### Ordered description of steps to be taken to execute the test case

1. Retrieve the SOA record from a delegated name server for the domain.
2. If the answer from step 1 is not authoritative, iterate step 1 until there is an authoritative answer.
3. Retrieve the retry value from the SOA record.
4. If the retry value is less than 3600 seconds, this test case fails.

### Outcome(s)

If the retry value is less than 3600 seconds, this test case fails.

### Special procedural requirements

None.

### Intercase dependencies

None.



## ZONE05: SOA 'expire' minimum value

### Test case identifier
**ZONE05** SOA 'expire' minimum value

### Objective

The SOA expire value specifies for how long any secondary name server
keeps the zone valid without any contact with the primary name server.
This value should be greater than how long a major outage would
typically last. The expire value should also be larger than the
refresh and retry values, as described in section 3.3.13 in
[RFC 1035](https://tools.ietf.org/html/rfc1035), and clarified in
section 2.2 of [RFC 1912](https://tools.ietf.org/html/rfc1912).

Setting the expire value low will increase the risk of any unwanted
non-availability of the zone because of any failures in contacting
the primary name server.

The [RIPE-203](https://www.ripe.net/publications/docs/ripe-203) recommendation
for the expire value is 1000 hours (roughly 41 days). Older DNSCheck code
had a 7 day minimum value (604800 seconds), and this is the minimum
value we recommend as an absolut minimum.

### Inputs

The domain name to be tested.

### Ordered description of steps to be taken to execute the test case

1. Retrieve the SOA record from a delegated name server for the domain.
2. If the answer from step 1 is not authoritative, iterate step 1 until there is an authoritative answer.
3. Retrieve the expire value and the refresh value from the SOA record.
4. If the expire value is less than 604800 seconds (7 days), this test
   case fails.
5. If the expire value is lower than the refresh value, this test case
   fails.

### Outcome(s)

If the expire value is less than 604800 seconds or if the expire value is
lower than the refresh value, this test case fails.

### Special procedural requirements

None.

### Intercase dependencies

None.



## ZONE06: SOA 'minimum' maximum value

### Test case identifier
**ZONE06** SOA 'minimum' maximum value

### Objective

The SOA minimum field sets the default TTL for all records in a zone.
The recommended value is to be "cache-friendly". However, for a zone
that changes content often, there is a need to keep the TTL values
shorter. The use of the SOA minimum value today is the negative cache
(where a resolver find content is missing).

The SOA minimum field is described in section 3.3.13 in
[RFC 1035](https://tools.ietf.org/html/rfc1035), and clarified in
section 2.2 of [RFC 1912](https://tools.ietf.org/html/rfc1912).
The description of the implementation of negative caching is in
[RFC 2308](https://tools.ietf.org/html/rfc2308) (although it has been
updated by several DNSSEC related RFCs, it is still relevant for this
purpose).

The [RIPE-203](https://www.ripe.net/publications/docs/ripe-203) recommendation
for the minimum value 2 days, but the negative caching is now the norm.
DNSCheck has a recommended value of between 300 seconds (5 minutes) and
86400 seconds (1 day).

### Inputs

The domain name to be tested.

### Ordered description of steps to be taken to execute the test case

1. Retrieve the SOA record from a delegated name server for the domain.
2. If the answer from step 1 is not authoritative, iterate step 1 until there is an authoritative answer.
3. Retrieve the SOA minimum value from the SOA record.
4. If the minimum value is larger than 86400 seconds (1 day), this test
   case fails.
5. If the minimum value is lower than 300 seconds (5 minutes), this test case
   fails.

### Outcome(s)

If the minimum value is larger than 86400 seconds or if the minimum value is
lower than 300 seconds, this test case fails.

### Special procedural requirements

None.

### Intercase dependencies

None.



## ZONE07: SOA master is not an alias

### Test case identifier
**ZONE07** SOA master is not an alias

### Objective

Any NS type record should not be a CNAME. The SOA MNAME should in this
respect not be a CNAME.

Quote from 2.4 in [RFC 1912](https://tools.ietf.org/html/rfc1912):

> Having NS records pointing to a CNAME is bad and may conflict badly
> with current BIND servers.

The SOA MNAME field is described in section 3.3.13 in
[RFC 1035](https://tools.ietf.org/html/rfc1035).

The [RIPE-203](https://www.ripe.net/publications/docs/ripe-203) recommendation
for the minimum value 2 days, but the negative caching is now the norm.
DNSCheck has a recommended value of between 300 seconds (5 minutes) and
86400 seconds (1 day).

### Inputs

The domain name to be tested.

### Ordered description of steps to be taken to execute the test case

1. Retrieve the SOA record from a delegated name server for the domain.
2. If the answer from step 1 is not authoritative, iterate step 1 until there is an authoritative answer.
3. Retrieve the SOA MNAME value from the SOA record.
4. Query for A and AAAA records for the host from MNAME.
5. If the answer to the query is a CNAME, this test case fails.

### Outcome(s)

If the SOA MNAME field is pointing to a CNAME, this test case fails.

### Special procedural requirements

None.

### Intercase dependencies

None.



## ZONE08: MX is not an alias

### Test case identifier
**ZONE08** MX is not an alias

### Objective

An MX type record for a domain must not resolve to a CNAME, following
the text in section 10.3 of [RFC 2181](https://tools.ietf.org/html/rfc2181)
and section 2.3.5 in
[RFC 5321](https://tools.ietf.org/html/rfc5321#section-2.3.5).

### Inputs

The domain name to be tested.

### Ordered description of steps to be taken to execute the test case

1. Query the MX record from a delegated name server for the domain.
2. If the answer from step 1 is not authoritative, iterate step 1 until there is an authoritative answer.
3. If the MX answer is a CNAME, this test case fails.

### Outcome(s)

If the MX record for the domain is pointing to a CNAME, this test case
fails.

### Special procedural requirements

None.

### Intercase dependencies

None.



## ZONE09: MX record present

### Test case identifier
**ZONE09** MX record present

### Objective

It is strongly recommended in section 7 of
[RFC 2142](https://tools.ietf.org/html/rfc2142)
that all domains should have a mailbox named hostmaster@domain.

> For simplicity and regularity, it is strongly recommended that the
> well known mailbox name HOSTMASTER always be used
> <HOSTMASTER@domain>.

It is therefore necessary for any domain to publish an MX record.
However, SMTP can make a delivery without the MX, using the A or
AAAA record as specified in section 5.1 of
[RFC 5321](https://tools.ietf.org/html/rfc5321#section-5.1).

### Inputs

The domain name to be tested.

### Ordered description of steps to be taken to execute the test case

1. Query the MX record from a delegated name server for the domain.
2. If the answer from step 1 is not authoritative, iterate step 1 until there is an authoritative answer.
3. If there are MX records present in the answer, this part of the test
   case succeeds.
4. If there are no MX records present in the answer from the MX query,
   query for the A and AAAA records for the domain.
5. If there is any A och AAAA record in the answers from the queries in
   step 4, this test case succeeds.

### Outcome(s)

If there is no target host (MX, A or AAAA record) to deliver e-mail for the
domain name, this test case fails.

### Special procedural requirements

None.

### Intercase dependencies

None.



