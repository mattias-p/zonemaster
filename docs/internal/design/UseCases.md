# Use cases

This list of use cases is meant to serve as a reference when validating feature
designs. It contains old use cases that we want to keep facilitating and
possibly new ones that we want to begin facilitating.

## Use case: Basic installation

This kind of installation consists of a single machine running Zonemaster CLI,
Zonemaster GUI and all their dependencies. It is a good starting point when
getting to know Zonemaster and its components.

## Use case: Horizontal scaling

To get higher throughput in Zonemaster Backend you can add more machines to your
installation to help out with job processing.

## Use case: Limited public access

For an installation with both internal users within your organization and public
users you may want to give your internal users more privileges than your public
users. E.g. internal users could be allowed to create large batches while public
users are not.

## Use case: Disparate workloads

An example of disparate workloads is when you run large nightly batches and
follow up anomalies manually using singular ad-hoc tests from the same vantage
point. In this case you may want to boot up a powerful and expensive machine
just to process the nightly batch in a reasonable amount of time and then shut
it down again. To troubleshoot anomalies found in the batch you may want to use
a tiny machine with a limited execution budget that is always on running on the
same network. It is imporant that the tiny machine does not help out with the
nightly batch or its execution budget will get exhausted.
